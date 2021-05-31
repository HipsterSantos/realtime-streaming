const { MeetingRoomRounded } = require('@material-ui/icons');
const express =require('express');
const mongoose= require('mongoose'); 
import {config} from './config';
const mongoULR = 'mongodb://localhost/streaming';

// build modules 


mongoose.connect(config)
.then( ()=>{
    console.log('successfull connnected')
})
.catch(()=>{
    console.error('something went wrong ');
})
;


