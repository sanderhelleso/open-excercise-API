import { Injectable, CanActivate, UseGuards, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class QuotaGuard implements CanActivate {
	async canActivate(context: ExcecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		console.log(req.user);
		return false;
	}
}
