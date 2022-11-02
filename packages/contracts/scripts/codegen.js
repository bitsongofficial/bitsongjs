const { join, resolve } = require('path');
const { default: codegen } = require('@cosmwasm/ts-codegen');

const contractsDir = resolve(join(__dirname, '/../schemas'));

const contracts = [
	{
		name: 'BS721Base',
		dir: join(contractsDir, 'bs721-base'),
	},
];

codegen({
	contracts,
	outPath: join(__dirname, '../src/codegen'),
	options: {
		bundle: {
			enabled: true,
			bundleFile: 'index.ts',
			scope: 'contracts',
		},
		types: {
			enabled: true,
		},
		client: {
			enabled: true,
		},
		messageComposer: {
			enabled: true,
		},
	},
})
	.then(() => {
		console.log('✨ all done!');
	})
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
