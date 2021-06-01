import express from 'express'; 
import mongoose from 'mongoose';
const mongodb = 'mongodb+srv://nagato:Pensador43@cluster1.qwmzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true})
.then(_=>console.log('connected successfully'))
.catch(_=>console.error('something went wrong'));

const app = express();


app.get('',async(req,res)=>{
    console.log('testing mongodb performance by doing aggression and other stuffs')
})
app.listen(5000,()=>{console.log('listening on port 5000')})