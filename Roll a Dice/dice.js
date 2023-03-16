// first using Javascript random function generate a random number 
// note: random function generates a number from 0 to 0.9999

var n = Math.random();

// now rounding down it between 0 to 5 by multiplying it by 6
n = Math.floor(n * 6)

// we don't want to include 0 and want to include 6 we will add 1 to our result n 
console.log(n + 1 )