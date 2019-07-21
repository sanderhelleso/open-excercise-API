import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from '../services/users/users.service';

@Module({
	providers: [ AuthService, UsersService ]
})
export class QuotasModule {}
