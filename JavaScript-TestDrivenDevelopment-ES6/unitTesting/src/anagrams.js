import { getLetterCount } from "./letter-count";
var deepEqual = require("deep-equal");

export const isAnagram = (string1, string2) => {
	return deepEqual(getLetterCount(string1), getLetterCount(string2));
};
