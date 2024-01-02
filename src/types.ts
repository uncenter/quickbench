/* eslint-disable @typescript-eslint/no-explicit-any */

import type TinyBench from 'tinybench';

export type BenchmarkFunction = {
	name: string;
	fn: (resource: BenchmarkResource['value']) => any;
};

export type BenchmarkResource = {
	name: string;
	value: any;
};

export type BenchmarkResults = {
	data: ReturnType<TinyBench['table']>;
	resource: string;
}[];

export type Options = { format: 'modern' | 'classic' | 'table' };
