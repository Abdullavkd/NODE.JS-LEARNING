// Path Modules

import path, { basename, join, parse } from 'path';

let pathDemo = './users/camera/oneDrive/page.html';
console.log(pathDemo);

// basename()
console.log(path.basename(pathDemo));


// dirname()
console.log(path.dirname(pathDemo));


// extname()
console.log(path.extname(pathDemo));


// join()
console.log(path.join(pathDemo,'doctor','patient'));


// resolve()
console.log(path.resolve(pathDemo,'hospital','college'));


// parse()
console.log(path.parse(pathDemo));




// in commonjs
import url from 'url';
let __filename = url.fileURLToPath(import.meta.url)
console.log(__filename);
let __dirname = path.dirname(__filename)
console.log(__dirname);

