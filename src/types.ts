/* eslint-disable @typescript-eslint/no-explicit-any */

export type BenchmarkFunction = {
	name: string;
	fn: (resource: BenchmarkResource['value']) => any;
};

export type BenchmarkResource = {
	name: string;
	value: any;
};
