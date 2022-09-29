import fs from 'fs';

export const streamToString = (stream: fs.ReadStream) => {
	const chunks: Buffer[] = [];

	return new Promise((resolve, reject) => {
		stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
		stream.on('error', err => reject(err));
		stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
	});
};
