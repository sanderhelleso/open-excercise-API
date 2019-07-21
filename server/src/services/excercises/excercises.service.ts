import { Injectable } from '@nestjs/common';
import Excercise from '../../database/models/excercise.model';
import { IExcercise } from '../../interfaces/excercise.interface';

@Injectable()
export class ExcercisesService {
	async findAll(): Promise<IExcercise[]> {
		return await Excercise.find();
	}

	async findByName(name: string): Promise<IExcercise> {
		return await Excercise.findOne({ name });
	}

	async findByMuscle(muscle: string): Promise<IExcercise[]> {
		return await Excercise.find({ muscle });
	}

	async findBySearch(keyword: string): Promise<IExcercise[]> {
		const rgx = new RegExp(`${keyword.trim()}`, 'i');
		const result = await Excercise.find({
			$or: [ { name: rgx }, { muscle: rgx } ]
		});

		return result;
	}
}
