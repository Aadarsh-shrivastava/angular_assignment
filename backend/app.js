
import express from 'express';
import cors from 'cors';


import router from './Routes/students.js';
import bodyParser from 'body-parser';
const app=express();

app.use(cors({
    origin:['http://localhost:3000','http://localhost:4200']
})); 
app.use(bodyParser.json())
app.use('/students',router);
app.get('/getdata',(req,res)=>{
    res.json({
        "statuscode":200,
        "message":"message working with nodemon"
    })
})

app.get('/',(req,res)=>{
    res.send('this is homepage of the express apllication')
})

app.listen(3000,(req,res)=>{
    console.log('express api running at port 3000')
})