const http= require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    console.log('Welcome!');
    res.end('Server is loaded!');
})
const port=3001;
server.listen(port,function(){
    console.log('Server running on '+port);
})