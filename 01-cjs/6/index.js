var counter = require('./util').counter;
var incCounter = require('./util').incCounter;

console.log(counter);  // 3
incCounter();
incCounter();
incCounter();
console.log(counter); // 3