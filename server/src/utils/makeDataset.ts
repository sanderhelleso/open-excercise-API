import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

async function makeDataset(): Promise<object> {
	const dataset: object = {};

	try {
		const datasetPath: string = path.join(__dirname, '../../dataset/excercises.csv');
		const data = await readFile(datasetPath, 'utf8');
		const dataArr = data.split(/\r?\n/);

		dataArr.forEach((data, i) => {
			const [ excercise, musclegroup ] = data.split(',');
			dataset[i] = { excercise, musclegroup };
		});
	} catch (error) {
		throw error;
	}

	return dataset;
}

export default makeDataset;
