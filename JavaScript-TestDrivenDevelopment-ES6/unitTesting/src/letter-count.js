export const getLetterCount = string => {
	const letters = string
		.toLowerCase()
		.replace(/[^\w]*/g, "") // RegEx for "everything except alphanumeric"
		.split("");
	let letterCount = {};

	letters.forEach(letter => {
		if (!letterCount[letter]) {
			letterCount[letter] = 1;
		} else {
			letterCount[letter] += 1;
		}
	});
	return letterCount;
};
