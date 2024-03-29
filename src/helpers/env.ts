// Example env helper, which uses dotenv and sets defaults

import 'dotenv/config';

export const clientId: string = process.env.CLIENT_ID || '';
export const testingGuild: string = process.env.TESTING_GUILD || '';
export const token: string = process.env.TOKEN || '';
export const mongoUri: string =
	process.env.MONGO_URI || 'mongodb://mongo:27017/awesome';
export const testing: boolean = 'TESTING' in process.env || false;
