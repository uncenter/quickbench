import type { BenchmarkFunction, BenchmarkResource, BenchmarkResults, Options } from './types';

import TinyBench from 'tinybench';

import { format } from './format';

export class Bench {
	private functions: BenchmarkFunction[];
	private resources: BenchmarkResource[];

	constructor() {
		this.functions = [];
		this.resources = [];
	}

	addFunction(name: BenchmarkFunction['name'], fn: BenchmarkFunction['fn']) {
		this.functions.push({
			name,
			fn,
		});
		return this;
	}

	addResource(name: BenchmarkResource['name'], value: BenchmarkResource['value']) {
		this.resources.push({
			name,
			value,
		});
		return this;
	}

	run(options?: Options) {
		const results: BenchmarkResults = [];

		for (const resource of this.resources) {
			const suite = new TinyBench();

			for (const func of this.functions) {
				suite.add(func.name, () => func.fn(resource.value));
			}

			suite.addEventListener('complete', () => {
				results.push({ data: suite.table(), resource: resource.name });
			});

			suite.run();
		}

		format(options?.format || 'modern', results);
	}
}
