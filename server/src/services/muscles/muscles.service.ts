import { Injectable } from '@nestjs/common';
import { IMuscle } from '../../interfaces/muscle.interface';
import Muscle from '../../database/models/muscle.model';

@Injectable()
export class MusclesService {
	async findAll(): Promise<IMuscle[]> {
		return await Muscle.find();
	}
}
