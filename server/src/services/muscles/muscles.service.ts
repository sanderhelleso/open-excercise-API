import { Injectable } from '@nestjs/common';
import { IMuscle } from '../../interfaces/muscle.interface';
import Muscle from '../../database/models/muscle.model';
import { EXCLUDE_FIELDS } from '../../database/exclude';

@Injectable()
export class MusclesService {
	async findAll(): Promise<IMuscle[]> {
		return await Muscle.find({}, EXCLUDE_FIELDS);
	}

	async findByName(name: string): Promise<IMuscle> {
		return await Muscle.findOne({ name }, EXCLUDE_FIELDS);
	}
}
