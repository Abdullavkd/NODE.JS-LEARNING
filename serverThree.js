import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';


let PORT = 3000;

let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let server = http.createServer(async(req,res)=>{
    try{
        if(req.method == 'GET'){
            let contest;
            if(req.url == '/'){
                contest = path.join(__dirname,'public','home.html');
            }else if(req.url == '/about'){
                contest = path.join(__dirname,'public','about.html');
            }else if(req.url == '/portfolio'){
                contest = path.join(__dirname,'public','portfolio.html');
            }else{
                throw new Error('Page not Found');
            }

            res.writeHead(200,{'Conternt-Type':'text/html'});
            const data = await fs.readFile(contest);
            res.write(data);
            res.end();
        }else{
            throw new Error('Not Found')
        }
    }catch(err){
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.write("Error");
        res.end();
    }
})


server.listen(PORT,()=>{
    console.log("Working in:"+PORT);
    
})