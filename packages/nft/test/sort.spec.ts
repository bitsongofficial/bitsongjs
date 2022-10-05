import { naturalCompare } from '../dist';

describe('Sort tests', () => {
	test('Should sort files by natural order', async () => {
		const test = [{ name: '3.png' }, { name: '2.png' }, { name: '1.png' }];

		const result = test.sort((a, b) => naturalCompare(a.name, b.name));

		expect(result).toEqual([
			{ name: '1.png' },
			{ name: '2.png' },
			{ name: '3.png' },
		]);
	}, 10000);
});
