import './utils/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import conn from './database/conn';

async function bootstrap() {
	await conn();
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
