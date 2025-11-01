import http from 'http';

let PORT = process.env.PORT;// create a port to run it on browser
// create a varible and assign a function that already declared in http called createServer(), and it holds two arguments - req,res-. 
let server = http.createServer((req,res)=>{
    // we can use .write method to write anything inside the document(on the browser)

    // we can change the text type inside of the response using setHeader()
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 500;


    console.log(req.url);
    console.log(req.method);
    
    

    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('<h1 style = "color: violet;">Hello World! Guys, it is a trial version</h1>');
    // if we write anything in the browser, we should stop it. if we don't stop it, it wil become infinity.
    res.end("<div style = 'background-color: blue; height: 100px; width: auto;'></div>");
});

// we want to connect the file to a port, if we don't connect, we can't open it on browser.
server.listen(PORT, ()=>{
    console.log(`Running Server on Port: ${PORT}`)
})