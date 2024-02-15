<div align="center">
	<h1>🚧 ARCHIVED 🚧</h1>
	<h3>Use https://vitest.dev/api/#bench instead.</h3>
</div>

---

# quickbench

Quick and easy benchmarking with various inputs. Minimal wrapper of `tinybench`.

## Installation

```sh
npm i @uncenter/quickbench
pnpm add @uncenter/quickbench
yarn add @uncenter/quickbench
bun add @uncenter/quickbench
```

## Usage

```js
import { Bench } from '@uncenter/quickbench';

const bench = new Bench();

function plus(strings) {
	let output = '';
	for (const string of strings) {
		output += string;
	}
	return output;
}

function join(strings) {
	return strings.join('');
}

function concat(strings) {
	''.concat(strings);
}

bench.addFunction('plus', plus).addFunction('join', join).addFunction('concat', concat);

bench.addResource('strings', ['aa', 'bb', 'cc', 'dd', 'ee']);

bench.run();
```

```
┌─────────┬───────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │  'plus'   │ '2,111' │ 473673.2932964735  │ '±2.41%' │  1056   │
│    1    │  'join'   │  '648'  │ 1542192.3293975682 │ '±1.84%' │   325   │
│    2    │ 'concat'  │  '427'  │ 2337976.233842217  │ '±8.18%' │   214   │
└─────────┴───────────┴─────────┴────────────────────┴──────────┴─────────┘
Fastest for resource 'strings' was 'plus'.
```

## License

[MIT](LICENSE)
