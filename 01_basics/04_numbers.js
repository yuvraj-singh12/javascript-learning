console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

let num = 10.75298

console.log(num.toPrecision(3))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example
  console.log(getRandomInt(1, 10));