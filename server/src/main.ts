import './utils/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import conn from './database/conn';
import seed from './database/seeder';
import { ValidationPipe } from './pipes/validation.pipe';
import * as helmet from 'helmet';
import { runJobs } from './jobs/cron';

async function bootstrap() {
	await conn();
	await seed();

	const app = await NestFactory.create(AppModule);

	app.enableCors();
	app.use(helmet());
	app.useGlobalPipes(new ValidationPipe());

	runJobs();

	await app.listen(process.env.PORT || 3000);
}
bootstrap();
