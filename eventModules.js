import {EventEmitter} from 'events';

// const myEmitter = new EventEmitter();

// function greetHadler(ok,name){
//     console.log("Hello! "+ name);   
// }

// function goodByeHandler(ok,name){
//     console.log('GoodBye! '+ name)
// }


// // Register Event Listener
// myEmitter.on('greet',greetHadler);
// myEmitter.on('goodBye',goodByeHandler);

// // Emit Events
// myEmitter.emit('greet','Salam','vatakara');
// myEmitter.emit('goodBye','Misbah','calicut');

// // Error Handling
// myEmitter.on('error',(err) => {
//     console.log('An Error Occured',err);
// })

// // Simulate Error
// myEmitter.emit('error',new Error('Something Went Wrong'))






















let emitterTest = new EventEmitter();

function told(one){
    console.log('hello! '+one)
}
function said(two){
    console.log('Hi '+two)
}

emitterTest.on('home',told);
emitterTest.on('house',said);

emitterTest.emit('house','India');
emitterTest.emit('home','Qatar');

emitterTest.on('error',(err) => {
    console.log('An Error Occured:',err);
})

emitterTest.emit('error',new Error('a file is missing'))