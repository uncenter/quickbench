import type { BenchmarkFunction, BenchmarkResource } from './types';

import { Bench } from 'tinybench';

export class CompareBench {
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

	run() {
		for (const resource of this.resources) {
			const suite = new Bench();
			for (const func of this.functions) {
				suite.add(func.name, () => func.fn(resource.value));
			}
			suite.addEventListener('complete', () => {
				const table = suite.table();
				const fastest = table
					.sort(
						(a, b) =>
							// @ts-expect-error: `a` and `b` are possibly null.
							a['Average Time (ns)'] - b['Average Time (ns)'],
					)
					.at(0);
				console.table(table);
				console.log(
					// @ts-expect-error: `fastest` is possibly null.
					`Fastest function for resource '${resource.name}' was '${fastest['Task Name']}'.`,
				);
			});
			suite.run();
		}
	}
}
