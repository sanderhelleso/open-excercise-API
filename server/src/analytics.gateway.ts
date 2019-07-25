import { WebSocketGateway, SubscribeMessage, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(4001)
export class AnalyticsGateway implements OnGatewayDisconnect {
	private activeClients: Map<string, any> = new Map<string, any>();

	@SubscribeMessage('recieve_client_key')
	handleRecieveClient(client: any, payload: any) {
		this.activeClients.set(payload, client);
	}

	@SubscribeMessage('remove_client_key')
	handleRemoveClient(key: any) {
		this.activeClients.delete(key);
	}

	handleDisconnect(client: any) {
		this.activeClients.forEach((_client, key) => {
			if (client === _client) {
				this.activeClients.delete(key);
			}
		});
	}

	emitAnalyticsPayload(apiKey: string, payload: any): any {
		if (this.activeClients.has(apiKey)) {
			const client = this.activeClients.get(apiKey);
			client.emit(apiKey, payload);
		}
	}
}
