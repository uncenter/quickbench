import type { BenchmarkResults, Options } from './types';

export function format(format: Options['format'], results: BenchmarkResults): void {
	console.log({ format, results });
	switch (format) {
		case 'classic': {
			// [js-yaml] x 75.13 ops/sec ±4.82% (65 runs sampled)
			// [yaml] x 5.97 ops/sec ±3.53% (20 runs sampled)
			// The fastest was [js-yaml].
			let result = '';
			for (const { data, resource } of results) {
				result += `\nResource: ${resource}`;
				for (const bench of data) {
					result += `${bench?.['Task Name']} x ${bench?.['ops/sec']} ops/sec ${bench?.Margin} (${bench?.Samples} runs sampled)`;
				}
			}
			console.log(result);
			break;
		}
		case 'modern': {
			break;
		}
		case 'table': {
			break;
		}
	}
}
