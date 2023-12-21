# tinybench-compare

## Installation

```sh
npm i tinybench-compare
pnpm add tinybench-compare
yarn add tinybench-compare
bun add tinybench-compare
```

## Usage

```js
import { CompareBench } from 'tinybench-compare';

const bench = new CompareBench();

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

bench.addResource('strings', ['aa', 'bb']);

bench.run();
```

```
┌─────────┬────────────────────┬──────────────┬────────────────────┬──────────┬──────────┐
│ (index) │     Task Name      │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples  │
├─────────┼────────────────────┼──────────────┼────────────────────┼──────────┼──────────┤
│    0    │       'plus'       │ '30,631,714' │ 32.64590316171206  │ '±1.35%' │ 15315858 │
│    1    │ 'template literal' │ '19,309,837' │ 51.78707425168645  │ '±1.02%' │ 9654920  │
│    2    │       'join'       │ '13,054,488' │  76.6020082409449  │ '±0.85%' │ 6527245  │
│    3    │      'concat'      │ '6,924,850'  │ 144.40744421734087 │ '±0.71%' │ 3462426  │
└─────────┴────────────────────┴──────────────┴────────────────────┴──────────┴──────────┘
Fastest for resource 'strings' was 'plus'.
```

## License

[MIT](LICENSE)
