const express=require('express');
const {connect}=require('./config/dbConfig');

const Tweet=require('./Models/tweet');

const app=express();

app.listen(5000,async()=>{

    console.log("server started");
    await connect();
    console.log('connected to mongoose');
    
    const tweet= await Tweet.findById(id,data);

    console.log(tweet);
});