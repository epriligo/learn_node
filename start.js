const http = require('http');
const fs   = require('fs');

const port = 3000;


const renderHTML = (path, res) => {
    fs.readFile(path,(err,data) => {
        if(err){
            res.writeHead(404);
            res.write('error');

        } else {
            res.write(data);
        }
        res.end();
    });

}

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html',
    });

    const url = req.url;
    if(url === '/about'){
        // res.write(' hallo adella ');
        renderHTML('./root.html',res);
        
    } else if(url === '/index'){
        renderHTML('./hack2.html')
    } else {
    // res.write('hello apa kabar sayang....');
    fs.readFile('./hack.html',(err,data) => {
        if(err){
            res.writeHead(404);
            res.write('error');

        } else {
            res.write(data);
        }
        res.end();
    });
    
    }
})
.listen(port,()=>{console.log(`server on ${port}`);
});