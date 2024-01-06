const Tweet=require('../Models/tweet');

class TweetRepository{
 
    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('error occured in tweet repository');
            throw error;
        }
    }

    async get(id){
        try {
            const tweet= await Tweet.findOne(id);
            return tweet;
        } catch (error) {
            console.log('error occured in tweet repository');
            throw error;
        }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comment'});
            return tweet;
        } catch (error) {
            console.log("error occured in tweet repository");
            throw error;
        }
    }
    async getAll(){
       try {
        const tweet= await Tweet.find({id:id});
        console.log(typeof tweet);
        return tweet;
       } catch (error) {
        console.log("error occured in tweet repository");
        throw error;
       }
    }

    async update(id,data){
        try {
         const tweet= await Tweet.findByIdAndUpdate(id,data,{new:true});
         return tweet;
        } catch (error) {
            console.log('error occured in tweet repository');
            throw error;
        }
    }
    async destroy(id){
        try {
            await Tweet.findOneAndDelete(id);
            return true;
        } catch (error) {
            console.log('error occured in tweet repository');
            throw error;
        }
    }

}
module.exports=TweetRepository;