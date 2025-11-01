import url from 'url';

let sampleUrl = 'https://www.google.com/search?q=india';

// URL object
let urlObj = new URL(sampleUrl)
console.log(urlObj);
console.log(urlObj.hostname);

// format()
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));


console.log(urlObj.search);

let testNow = new URLSearchParams(urlObj.search)
console.log(testNow);
console.log(testNow.get('q'));
testNow.append('limit',7);
console.log(testNow);
testNow.delete('limit')
console.log(testNow);
