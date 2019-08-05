import { IQuotaDataAfterSub } from './../../interfaces/quota.interface';
import { Controller, Get, Param, Body, Post, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from './dto/customer.dto';
import * as Stripe from 'stripe';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../decorators/user.decorator';
import { IReqUser } from '../../interfaces/user.interface';

@UseGuards(AuthGuard('jwt'))
@Controller('customers')
export class CustomersController {
	constructor(private readonly customersService: CustomersService) {}

	@Get()
	public async getCustomers(): Promise<Stripe.IList<Stripe.customers.ICustomer>> {
		return await this.customersService.findAllCustomers();
	}

	@Get('/:id')
	public async getCustomer(@Param('id') id: string): Promise<Stripe.customers.ICustomer> {
		return await this.customersService.findCustomer(id);
	}

	@Post('/create')
	public async createCustomer(
		@User() { id }: IReqUser,
		@Body() createCustomerDTO: CreateCustomerDto
	): Promise<IQuotaDataAfterSub> {
		return await this.customersService.createCustomer(createCustomerDTO, id);
	}

	@Patch('/:id')
	public async updateCustomer(@Param('id') id: string, @Body() body): Promise<Stripe.customers.ICustomer> {
		return await this.customersService.updateCustomer(id, body);
	}

	@Delete('/:id')
	public async deleteCustomer(@Param('id') id: string): Promise<Stripe.IDeleteConfirmation | boolean> {
		return await this.customersService.deleteCustomer(id);
	}
}
