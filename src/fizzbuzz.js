const fizzBuzz =  n => {
    return (n % 3) ? "Fizz" : (n % 5) ? "Buzz" : (n % 3 && n % 5) ? "FizzBuzz" : "NULL";
}

module.exports = fizzBuzz
