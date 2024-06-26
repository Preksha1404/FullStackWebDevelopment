const express = require('express');
const fileUpload = require('express-fileupload');
const path=require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/upload",fileUpload({createParentPath:true}),(req,res)=>{
    const files=req.files;
    console.log(files);
    return res.json({status:"logged", message:"logged"})
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));