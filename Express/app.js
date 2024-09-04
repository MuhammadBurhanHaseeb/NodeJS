// when we use a node with express module or package
const express = require('express')
const app = express();
const ePort= 3000;
const hostmann = 'localhost';
app.get('/index' , (req,res)=>{
    res.send("hello world");
} );

app.listen(ePort);