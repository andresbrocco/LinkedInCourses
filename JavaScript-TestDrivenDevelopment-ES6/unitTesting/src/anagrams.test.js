import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("anagrams - basic functionality", () => {
	it("return true if lower case strings without special characters are anagrams", () => {
		const string1 = "listen";
		const string2 = "silent";
		const expected = true;
		const actual = isAnagram(string1, string2);
		expect(actual).to.equal(expected);
	});

	it("return true if random case strings without special characters are anagrams", () => {
		const string1 = "listEn";
		const string2 = "silent";
		const expected = true;
		const actual = isAnagram(string1, string2);
		expect(actual).to.equal(expected);
	});

	it("return true if random case strings with special characters are anagrams", () => {
		const string1 = "lis tEn";
		const string2 = "silent";
		const expected = true;
		const actual = isAnagram(string1, string2);
		expect(actual).to.equal(expected);
	});
});
