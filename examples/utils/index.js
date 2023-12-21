const alphabet = Array.from({ length: 26 }, (v, k) => String.fromCharCode(k + 65));

export const randomLetterArray = ({ length }) =>
	Array.from({ length: length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]);
