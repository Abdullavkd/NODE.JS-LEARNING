import {createServer} from 'http';

let Port = 2000;

let users = [
    {id: 1,name: 'Bilal'},
    {id: 2, name: 'Jabir'},
    {id: 3, name: 'Sulaiman'},
    {id: 4, name : 'Akbar'}
];

// logger middleware
let logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// json handler
let jsonHandler = (req,res, next) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    next();
}

// users individual hadler
let usersIndividualHandler = (req,res) => {
    const value = req.url.split('/')[2];
    const user = users.find((val) => val.id === parseInt(value));
    if(user){
        // res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(user));
        res.end();
    }else{
        res.end('No One Found');
    }
    
} 

// error handler
let errorHandler = (req,res) => {
    // res.writeHead(404,{'Content-Type':'application/json'});
    res.write(JSON.stringify({Message: "Page not Found"}));
    res.end();
}

// user handler for POST request
let userHandlerPost = (req,res) => {
    let body = '';
    req.on('data',(chunk) => {
        body+=chunk.toString();
    })
    req.on('end',() => {
        let newUser = JSON.parse(body);
        users.push(newUser);
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

let server = createServer((req,res)=>{

    // calling logger middleware from here
    logger(req,res,()=>{
        jsonHandler(req,res, () => {
            if(req.url.match(/\/users\/([0-9]+)/) && req.method === 'GET'){
            usersIndividualHandler(req,res);
            }else if(req.url == '/users' && req.method == 'POST'){
                userHandlerPost(req,res);
            }else{
                errorHandler(req,res)
            }
        })
    })

        
    
})

server.listen(Port,()=>{
    console.log(`working in port: ${Port}`);    
})