import { WebSocketGateway, SubscribeMessage, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(4001)
export class AnalyticsGateway implements OnGatewayDisconnect {
	private activeClients: Map<string, any> = new Map<string, any>();

	@SubscribeMessage('recieve_user_id')
	handleRecieveUserID(client: any, payload: any) {
		this.activeClients.set(payload, client);
	}

	handleDisconnect(client: any) {
		this.activeClients.forEach((_client, key) => {
			if (client === _client) {
				this.activeClients.delete(key);
			}
		});
	}

	emitAnalyticsPayload(userID: string, payload: any): any {
		if (this.activeClients.has(userID)) {
			const client = this.activeClients.get(userID);
			client.emit(userID, payload);
		}
	}
}
