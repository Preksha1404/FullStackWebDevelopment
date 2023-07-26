const http= require('http');
const server=http.createServer(function(req,res){
    console.log("Hello world");
    res.end("Hello from server!!");
})
const port=3001;
server.listen(port,function(){
    console.log('Server running on '+port);
})