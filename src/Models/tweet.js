const mongoose=require('mongoose');

//schema
const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    email:{
        type:String
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true});


//schema se model

const Tweet= mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;