import { WebSocketGateway, SubscribeMessage, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway(4001)
export class AnalyticsGateway implements OnGatewayDisconnect {
	private activeClients: Map<string, any> = new Map<string, any>();

	handleDisconnect(client: any) {
		this.activeClients.forEach((_client, key) => {
			if (client === _client) {
				this.activeClients.delete(key);
			}
		});
	}

	@SubscribeMessage('recieve_user_id')
	handleRecieveUserID(client: any, payload: any) {
		this.activeClients.set(payload, client);
		console.log(payload);

		client.emit('recieve_user_id', 'recieved user id');
	}

	emitAnalyticsPayload(userID: string, payload: any): any {
		const client = this.activeClients[userID];
		client.emit('recieve_analytics_payload', payload);
	}
}
