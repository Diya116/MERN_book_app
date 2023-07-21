import Book from './model.js';
export async function getbooks(req,res){
    const books=await Book.find();
    await res.status(200).json(books);
} 
export async function getbook(req,res){
   const book=await Book.findById(req.params.id);
   if(!book)
   {
     res.status(404).json({message:"book not found"});
   } 
   res.status(200).json(book);
}
export async function postbook(req,res){
    const{title,auther,description,category}=req.body;
    const book=await Book.create({title,auther,description,category});
    res.status(201).json(book);
}
export async function putbook(req,res){
    const book=await Book.findById(req.params.id);
    if(!book)
    {
        res.status(404).json({message:"book not found"});
       
    }
    else{
    const updatebook=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatebook);
    }
}
export async function deletebook(req,res){
      const book=await Book.findById(req.params.id);
        if(!book)
        {
            res.status(404).json({message:"book not found"});
        }
        else{
      const deletebook= await book.deleteOne({_id:req.params.id});
        res.status(200).json({message:"book deleted successfully"});
        }
}