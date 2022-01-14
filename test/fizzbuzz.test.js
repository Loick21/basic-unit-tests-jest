const fizzBuzz = require("../src/fizzbuzz")

test('fizzbuzz should return Fizz', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
})

test('fizzbuzz should return Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('fizzbuzz should return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('fizzbuzz should return NULL', () => {
    expect(fizzBuzz(22)).toBe("NULL");
})
