import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

async function makeDataset(): Promise<any> {
	const excercises: object = {};
	const muscles: object = {};

	try {
		const datasetPath: string = path.join(__dirname, '../../dataset/excercises.csv');
		const data = await readFile(datasetPath, 'utf8');
		const dataArr = data.split(/\r?\n/);

		dataArr.forEach((data, i) => {
			const [ name, muscle ] = data.split(',').map((d) => d.trim());
			excercises[i] = { name, muscle };

			if (muscles.hasOwnProperty(muscle)) {
				muscles[muscle].excercises++;
			} else {
				muscles[muscle] = { name: muscle, excercises: 1 };
			}
		});
	} catch (error) {
		throw error;
	}

	return {
		excercises,
		muscles
	};
}

export default makeDataset;
