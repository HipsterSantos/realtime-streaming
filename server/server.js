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

const userModel = mongoose.model('User', useSchema);
const orderModel  = mongoose.model('Order',orderSchema);


async function inserOneOrder(user){

const order = orderModel({
  ...order
})
return awit order.save();
}
async function inserManyOder(col){
  const order = orderModel({...col})
  return awit order.save();
}

async function insertOneUsers(user){
  const user = orderModel({
    user
  })

  return await user.save();
}
async function insertManyUsers(users){
  const users = orderModel({
    ...users
  })
  return await user.save();
}
app.get('',async(req,res)=>{
    console.log('testing mongodb performance by doing aggression and other stuffs')
})
app.listen(5000,()=>{console.log('listening on port 5000')})
