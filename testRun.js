import { log } from 'console';
import http from 'http';
let PORT = 9000;

const ser = http.createServer((req,res)=>{

    // we can set text type inside the res
    // res.setHeader('Content-Type','text/normal')
    // res.setHeader('Content-Type','text/html');
    // res.statusCode = 404;

    // we can set text type and status code together
    res.writeHead(200,{'Content-Type':'text/html'});


    res.write("<h1 style = 'background-color: yellow'>Starting The Journey, It is a Sample Test For Now.</h1>");
    res.end('<div style = "display: flex; justify-content: space-between"><div style = "height: 100px; width: 100px; background-color: green;"></div><div style = "height: 100px; width: 100px; background-color: green;"></div><div style = "height: 100px; width: 100px; background-color: green;"></div><div style = "height: 100px; width: 100px; background-color: green;"></div></div>');
})
ser.listen(PORT,()=>{
    console.log("Started on Port: "+PORT);
})