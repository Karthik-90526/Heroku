/*const express =require('express')
const app=express()
const port =process.env.PORT || 3000
app.get('/',(req,res) =>{
    res.send('hello kumar')
 })

 app.listen(3000,()=>{
    console.log('App is listen')
 })*/
const express =require('express');
const app= express();
const cors = require("cors");
const helmet = require("helmet");
const Blog =require('./db/blog')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
const port =process.env.port || 3000
app.post('/',(req,res)=>{
Blog.create(req.body).then((blog)=>{
res.status(201).send(blog);
})
.catch((error)=>{
    res.status(400).send(error);
})
});

app.listen(port,(req,res)=>{
    console.log("app is running");
})
