const http= require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
    //Create the file
    fs.appendFile('demofile.txt','Hello world',function(err){
        if(err){throw(err)}
        console.log('Saved!');
    })
    //Open the file
    fs.open('student-data.txt','w',function(err,file){
        if(err){throw(err)}
        console.log('File is opened!');
    })
    // //Read the file
    fs.readFile('student-data.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        console.log('File is read!');
        return res.end();
    });
    // //Update the file
    fs.writeFile('demofile.txt','This is my new text',function(err){
        if(err){throw(err)}
        console.log('Data is updated!');
    })
    // //Rename the file
    fs.rename('demofile.txt','newdemofile.txt',function(err){
        if(err){throw(err)}
        console.log('File name is renamed!');
    })
    // //Delete the file
    fs.unlink('newdemofile.txt',function(err){
        if(err){throw(err)}
        console.log('File is deleted!');
    })
    //Delete the file
    fs.unlink('newdemofile.txt',function(err){
        if(err){throw(err)}
        console.log('File is deleted!');
    })
})
const port=4000;
server.listen(port,function(){
    console.log('Server running on '+port);
})