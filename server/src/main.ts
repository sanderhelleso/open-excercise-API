import './utils/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import conn from './database/conn';
import seed from './database/seeder';

async function bootstrap() {
	await conn();
	seed();
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
