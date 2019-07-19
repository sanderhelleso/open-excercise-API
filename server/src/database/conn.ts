import * as mongoose from 'mongoose';

const uri: string = process.env.DB_CONN_LOCAL;
const options: object = {
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 1000,
	useNewUrlParser: true
};

async function conn() {
	try {
		await mongoose.connect(uri, options);
		console.log('Connected to mongoDB...');
	} catch (error) {
		throw error;
	}
}

export default conn;
