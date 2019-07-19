import { Injectable } from '@nestjs/common';
import Excercise from '../../database/models/excercise.model';
import { IExcercise } from '../../interfaces/excercise.interface';

@Injectable()
export class ExcercisesService {
	async findAll(): Promise<IExcercise[]> {
		return await Excercise.find();
	}
}
