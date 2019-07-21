import { Injectable } from '@nestjs/common';
import Excercise from '../../database/models/excercise.model';
import { IExcercise } from '../../interfaces/excercise.interface';
import { EXCLUDE_FIELDS } from '../../database/exclude';

@Injectable()
export class ExcercisesService {
	async findAll(): Promise<IExcercise[]> {
		return await Excercise.find({}, EXCLUDE_FIELDS);
	}

	async findByName(name: string): Promise<IExcercise> {
		return await Excercise.findOne({ name }, EXCLUDE_FIELDS);
	}

	async findByMuscle(muscle: string): Promise<IExcercise[]> {
		return await Excercise.find({ muscle }, EXCLUDE_FIELDS);
	}

	async findBySearch(keyword: string): Promise<IExcercise[]> {
		const rgx = new RegExp(`${keyword.trim()}`, 'i');
		const result = await Excercise.find(
			{
				$or: [ { name: rgx }, { muscle: rgx } ]
			},
			EXCLUDE_FIELDS
		);

		return result;
	}
}
