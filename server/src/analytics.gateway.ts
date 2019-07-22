import { WebSocketGateway, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway(4001)
export class AnalyticsGateway implements OnGatewayConnection, OnGatewayDisconnect {
	handleConnection(client: any, ...args: any[]) {
		console.log('client connected');
	}

	handleDisconnect(client: any) {
		console.log('client disconected');
	}

	@SubscribeMessage('message')
	handleMessage(client: any, payload: any): string {
		return 'Hello world!';
	}
}
