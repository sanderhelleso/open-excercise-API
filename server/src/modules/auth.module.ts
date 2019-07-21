import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthController } from '../controllers/auth/auth.controller';
import { UsersService } from '../services/users/users.service';
import { QuotasService } from '../services/quotas/quotas.service';

@Module({
	controllers: [ AuthController ],
	providers: [ AuthService, JwtStrategy, UsersService, QuotasService ]
})
export class AuthModule {}
