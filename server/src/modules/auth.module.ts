import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthController } from '../controllers/auth/auth.controller';
import { UsersService } from '../services/users/users.service';

@Module({
	controllers: [ AuthController ],
	providers: [ AuthService, JwtStrategy, UsersService ]
})
export class AuthModule {}
