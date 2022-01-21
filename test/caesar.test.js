// if the "shift" value = 0, should return false 
// if the "shift" value is less that -25, should return false
// if the "shift" value is greater than 25, should return false 
// if the "shift" value is not present, should return false
// if the "shift" value is not a number, should return false
// if a letter is shifted so that it goes "off" the alpahbet, it should wrap back around to the front
// spaces and nonalphabetic symbols should be maintained
// capital letters should be ignored 

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "This is only a test.";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount greater than 25", () => {
        const message = "This is only a test.";
        const shift = 40;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "This is only a test.";
        const shift = -40;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
});
describe("encoding a message", () => {
    it("should return capital letters as lowercase letters", () => {
        const message = "This is only a test.";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "ymnx nx tsqd f yjxy.";

        expect(actual).to.equal(expected);
    });
    it("should leave non-alphabetical characters as is", () => {
        const message = "$#%^.";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "$#%^.";
        
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the alphabet", () => {
        const message = "This is only a test. Z.";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "ymnx nx tsqd f yjxy. e.";

        expect(actual).to.equal(expected);
    });
});