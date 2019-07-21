import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from '../services/users/users.service';
import { QuotasController } from '../controllers/quotas/quotas.controller';
import { QuotasService } from '../services/quotas/quotas.service';

@Module({
	controllers: [ QuotasController ],
	providers: [ AuthService, UsersService, QuotasService ]
})
export class QuotasModule {}
