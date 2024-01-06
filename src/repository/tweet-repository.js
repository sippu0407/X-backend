const Tweet=require('../Models/tweet');

class TweetRepository{
 
    async create(data){
        try {
            
        } catch (error) {
            
        }
    }

    async get(id){
        try {
            
        } catch (error) {
            
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

    }

    async update(id,data){
        try {
            
        } catch (error) {
            
        }
    }
    async destroy(id){
        try {
            
        } catch (error) {
            
        }
    }

}
module.exports=TweetRepository;