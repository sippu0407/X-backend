const mongoose=require('mongoose');

//schema
const commentSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    }
  
},{timestamps:true});


//schema se model

const Comment= mongoose.model('Comment',commentSchema);
module.exports=Comment;