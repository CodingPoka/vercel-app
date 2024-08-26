


const http=require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.end("<h1>KIngshuk<h1>");
})

server.listen(port,hostname,()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`);
})