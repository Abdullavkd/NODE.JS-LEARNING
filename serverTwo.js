import http from 'http';


let port = 8500;

let servent = http.createServer((req,res)=>{
    // router

    try{
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("<h1>Home Page</h1>");
                res.end();
            }else if(req.url === '/about'){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("<h1>About Section</h1>");
                res.end();
            }else if(req.url === '/portfolio'){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('<h1>Portfolio</h1>');
                res.end();
            }else{
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('<h3>Page Not Found</h3>');
                res.end();
            }
        }else{
            throw new Error('Server Error');
        };
    }catch(err){
        res.writeHead(500,{'Content-Type':'text/html'})
        res.end('<h3>Server Error</h3>');
    };
    
});

servent.listen(port, ()=>{
    console.log(`Page Started at ${port}`); 
});