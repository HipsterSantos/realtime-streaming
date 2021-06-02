import express from 'express'; 
import mongoose from 'mongoose';
const mongodb = 'mongodb+srv://nagato:Pensador43@cluster1.qwmzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const uri  = 'mongodb://localhost/semil';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(_=>console.log('connected successfully'))
.catch(_=>console.error('something went wrong'));

const app = express();

const userSchema  = new mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    phone:String
})

const orderSchema = new mongoose.Schema({
    amount:{type:String,required: true},
    product:{type: String},
    ref:{type:String},
    whoBuy: {
        type: mongoose.Schema.Types.ObjectID,
        ref:'User'}
})
app.get('',async(req,res)=>{
    console.log('testing mongodb performance by doing aggression and other stuffs')
})
app.listen(5000,()=>{console.log('listening on port 5000')})