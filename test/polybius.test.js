// should encode i and j to 42
// should decode 42 to "i/j"
// should ignore capital letters
// should maintain spaces while encoding/decoding
// *should maintain special characters while encoding/decoding
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe('polyibius() tests by me', () => {
describe("encoding a message", () => {

it('should encode a message by translating each letter to number pairs', () => {
    const message = 'This is a test'
    const encode = true
    const expected = '44324234 4234 11 44513444'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  //more it(shoulds) if needed
  it('should translate both i and j to 42', () => {
    const message = 'This is a test Thjs js a test'
    const encode = true
    const expected = '44324234 4234 11 44513444 44324234 4234 11 44513444'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should maintain spaces', () => {
    const message = 'This is a test'
    const encode = true
    const expected = '44324234 4234 11 44513444'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  }) //describe("encoding a message") end

describe("decoding a message", () => {
  it('should decode a message by translating each pair of numbers into a letter', () => {
    const message = '44324234 4234 11 44513444'
    const encode = false
    const expected = 'thijs ijs a test'
    const actual = polybius(message, encode)
})
  
  it('should translate both i and j to 42', () => {
    const message = '44324234 4234 11 44513444 44324234 4234 11 44513444'
    const encode = false
    const expected = 'thijs ijs a test thijs ijs a test'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should leave spaces as is', () => {
    const message = '44324234 4234 11 44513444'
    const encode = false
    const expected = 'thijs ijs a test'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should return false if the length of all numbers is odd', () => {
    const message = '4432434 4234 11 44513444'
    const encode = false
    const expected = false
    const actual = polybius(message, encode)
    expect(actual).to.be.false
  })
})
  
})
