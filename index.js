
// // import functions using require('./filename.js');
// const {generateRandomNumbers, generateNow} = require('./util');

// console.log(`Random Number is : ${generateRandomNumbers()}`);
// console.log(`Random Now: ${generateNow(59)}`);



// import normal type (type: module)
import generateRandomNumbers,{generateNow} from "./util.js";
console.log(generateRandomNumbers());
console.log(generateNow(3));
