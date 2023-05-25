// const express=require('express')
import express from 'express';
import bodyParser from 'body-parser';
const router=express.Router();

let studentData=[
    
]

// these are all the api routes 
    router.get('/',(req,res)=>{
        res.send(studentData)
    })

    router.get('/:rollno',(req,res)=>{
        const rno=req.params.rollno;
        const student=studentData.find((item)=>item.rollno===rno)
        res.send(student)
    })


    router.post('/',(req,res)=>{
        const user=req.body;
        studentData.push(user);
        console.log(user)
        res.send(studentData)
    })

    router.delete('/:rollno',(req,res)=>{
        const rno=req.params.rollno;
        console.log("working",rno)
        // var i=studentData.find((item)=>item.rollno===rno)
        studentData=studentData.filter((item)=>item.rollno!==rno)
        console.log(studentData)
        res.send(studentData)
    })

    router.patch('/:rollno',(req,res)=>{
        const rno=req.params.rollno;
        const { studentName, DOB, score}=req.body;
        const student=studentData.find((item)=>item.rollno===rno)
        if(studentName){
            student.studentName=studentName;
        }

        if(DOB){
            student.DOB=DOB;
        }
        if(score){
            student.score=score;
        }
        res.send(studentData)
    })

export default router;