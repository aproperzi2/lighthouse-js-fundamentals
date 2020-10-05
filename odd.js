const isOdd = function (num) {
  if (num % 2 === 0) {
    return false; // Is even
  } else {
    return true; // Is odd
  }
}

console.log("1 is odd: " + isOdd(1));
console.log("2 is odd: " + isOdd(2));
console.log("50 is odd: " + isOdd(50));
console.log("99 is odd: " + isOdd(99));