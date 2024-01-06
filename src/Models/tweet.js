const mongoose=require('mongoose');

//schema
const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ],
    hashtags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
    }]
},{timestamps:true});


//schema se model

const Tweet= mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;