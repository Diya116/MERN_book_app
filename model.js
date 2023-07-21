import mongoose from 'mongoose';
export const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    }
})
export default mongoose.model("Book",BookSchema);