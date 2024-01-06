const mongoose=require('mongoose');

const HashtagSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweet"
    }]


},{timestamps:true});

const Hashtag=mongoose.model('Hashtag',HashtagSchema);
module.exports=Hashtag;