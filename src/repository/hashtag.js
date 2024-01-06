const Hashtag=require('../Models/tag');

class HashtagRepository{
 
    async create(data){
        try {
            const tag=await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log('error occured in tag repository');
            throw error;
        }
    }

    async get(id){
        try {
            const tag= await Hashtag.findOne(id);
            return tag;
        } catch (error) {
            console.log('error occured in tag repository');
            throw error;
        }
    }

    async getWithComments(id){
        try {
            const tag=await Hashtag.findById(id).populate({path:'comment'});
            return tag;
        } catch (error) {
            console.log("error occured in tag repository");
            throw error;
        }
    }
    async getAll(){
       try {
        const tag= await Hashtag.find({id:id});
        console.log(typeof tag);
        return tag;
       } catch (error) {
        console.log("error occured in tag repository");
        throw error;
       }
    }

    async update(id,data){
        try {
         const tag= await Hashtag.findByIdAndUpdate(id,data,{new:true});
         return tag;
        } catch (error) {
            console.log('error occured in tag repository');
            throw error;
        }
    }
    async destroy(id){
        try {
            await Hashtag.findOneAndDelete(id);
            return true;
        } catch (error) {
            console.log('error occured in tag repository');
            throw error;
        }
    }

}
module.exports=HashtagRepository;