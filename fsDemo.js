// File System Modules Demo(fs Modules)
// there are synchronous and asynchronous

// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('readMe.txt','utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// });


// readFileSync() - synchronous
// let data = fs.readFileSync('readMe.txt','utf8');
// console.log(data);



// // readFile() - Promise .then()
// fs.readFile('readMe.txt','utf8').then((data) => console.log(data)).catch((err) => console.log(err))



// // readFile() - Async/await
// let dataOne = async () => {
//     try {
//         let data = await fs.readFile('readMe.txt','utf8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// dataOne();





// // writeFile() - async/Await
// let demoOne = async () => {
//     try {
//         await fs.writeFile('readMe.txt','Hello, I want to Change The Data');
//         console.log('Changed...!');
//     } catch (error) {
//         console.log(error);
//     }
// }
// demoOne();



// // writeFile()
// fs.writeFile('readMe.txt','Today is Friday');


// // writeFile()
// let data = fs.writeFile('readMe.txt','Now, I am Thinking about the future of India');




// // appendFile()
// let oneNow = async() => {
//     try {
//         await fs.appendFile('readMe.txt','Now, I am Entered to Append File.')
//         console.log('Added...!');
//     } catch (error) {
//         console.log(error);
//     }
// }
// oneNow()




