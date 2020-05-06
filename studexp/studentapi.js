const express=require('express');
const bodyparser=require('body-parser');
const cors =require('cors');
const app=express();
const port=3000;
let students=[{
    'studid':'4001',
    'studname':'Marijan Haverberke',
    'dateofbirth':'2014-12-15',
    'address':"No starch press",
    'phone':8986585546,
},
{
    'studid':'4004',
'studname':'Jonathan Burke',
'dateofbirth':'2014-2-5',
'address':"No starch press",
'phone':8986585980,
},
{
    'studid':'4008',
    'studname':'Luke Andrews',
    'dateofbirth':'2016-10-25',
    'address':"No press",
    'phone':8986585700,
}];
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get('/student',(req,res) =>{
    res.json(students);
});
app.get('/student/:studid',(req,res)=>{
    const studid=req.params.studid;
    for(let i of students){
        if(i.studid===studid){
            res.json(i);
            return;
        }
    }
    res.status(404).send('student not found')
})
app.post('/student', (req,res)=>{
    const student= req.body;
    console.log(student);
    students.push(student);
    res.send('student is added to the database');
});
app.post('/student/:studid',(req,res)=>{
    const studid=req.params.studid;
    const newbook=req.body;
    for(let i=0;i<students.length;i++){
        let student=students[i];
        if(student.studid===studid){
            students[i]=newbook;
        }
    }
    res.send('student is edited');
})
app.put('/student/:studid',(req,res)=>{
    const studid=req.params.studid;
    const newbook=req.body;
    for(let i=0;i<students.length;i++){
        let student=students[i];
        if(student.studid===studid){
            students[i]=newbook;
        }
    }
    res.send('student is edited');
})
app.delete('/student/:studid',(req,res)=>{
    const studid=req.params.studid;
    const newbook=req.body;
   students = students.filter(i=>{
       if(i.studid !== studid)
       return true;
       return false;
   })
    res.send('student is deleted');
})
app.listen(port,()=>{
    console.log(`Hello world listening on port ${port}!`);
})