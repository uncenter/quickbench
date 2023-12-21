import { Bench } from '../dist/index.mjs';
import { randomLetterArray } from './utils/index.js';

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

bench.addResource('small array of strings', randomLetterArray({ length: 10 }));
bench.addResource('large array of strings', randomLetterArray({ length: 100000 }));

bench.run();
