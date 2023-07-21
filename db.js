import mongoose from 'mongoose';
const connectDB=async()=>{
    try{
const connect=await mongoose.connect("mongodb+srv://shahdiya1162004:2Tpcdjk6rXL3KJPz@book.msy5b9r.mongodb.net/?retryWrites=true&w=majority")
console.log(
    "DB CONNECTED",connect.connection.host,
    connect.connection.name,connect.connection.tld
)
    } 
    catch(err)
    {
      console.log(err); 
      process.exit(1); 
    }
}
export default connectDB;