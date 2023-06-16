import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/cjs/index.cjs',
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: 'dist/esm/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			typescript({ tsconfig: './tsconfig.json' }),
			nodePolyfills(),
			/* resolve(), */
			commonjs(),
			json(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
