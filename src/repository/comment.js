const Comment=require('../Models/comment');

class CommentRepository{
 
    async create(data){
        try {
            const comment=await Comment.create(data);
            return comment;
        } catch (error) {
            console.log('error occured in Comment repository');
            throw error;
        }
    }

    async get(id){
        try {
            const comment= await Comment.findOne(id);
            return comment;
        } catch (error) {
            console.log('error occured in Comment repository');
            throw error;
        }
    }

    async getAll(){
       try {
        const comment= await Comment.find({id:id});
        console.log(typeof Comment);
        return comment;
       } catch (error) {
        console.log("error occured in Comment repository");
        throw error;
       }
    }

    async update(id,data){
        try {
         const comment= await Comment.findByIdAndUpdate(id,data,{new:true});
         return comment;
        } catch (error) {
            console.log('error occured in Comment repository');
            throw error;
        }
    }
    async destroy(id){
        try {
            const comment=await comment.findOneAndDelete(id);
            return comment;
        } catch (error) {
            console.log('error occured in Comment repository');
            throw error;
        }
    }

}
module.exports=CommentRepository;