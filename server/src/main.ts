import './utils/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import conn from './database/conn';
import seed from './database/seeder';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
	await conn();
	await seed();
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
