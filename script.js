const readlineSync = require('readline-sync')

let numbers = readlineSync.question(
  "Enter as many numbers as you want to check if it's a Prime Number, separating them with a comma: "
)

const numbersArray = numbers.split(',')

const primeNumbersList = () => numbersArray.filter(isPrime)

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false
    }
  return num > 1
}

function response() {
  if (primeNumbersList(numbersArray).length > 0) {
    console.log(`The Prime Numbers are: ${primeNumbersList(numbersArray)}`)
  } else {
    console.log('No Prime Number')
  }
}

response()
