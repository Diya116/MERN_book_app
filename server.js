import express from "express";
import connectDB from "./db.js"
connectDB();
import router from "./route.js";
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello everyone")
})
app.use("/api",router);
let PORT=5000;
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});
