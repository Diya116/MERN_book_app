import React ,{useState}from "react";
import "./index.css";
export default function Addbook() {

  const[book,setbook]=useState({
    title:"",
    auther:"",
    description:"",
    category:""
  });
  const handleInput=(e)=>{
    console.log(e);
    const{name,value}=e.target;
    setbook({...book,[name]:value});
  }
  const postData=async(e)=>{
    e.preventDefault();
    const{title,auther,description,category}=book;
    const res=await fetch("/api/book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,auther,description,category
      })
    });
    const data=await res.json();
    if(!data)
    {
      console.log("book not added");
    }
    else{
      alert("book added successfully");
     
    }
  }
  return (
    <div class="form-container">
      <h1>Register With Us</h1>
      <form method="POST" class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Book Name"
          name="title"
          value={book.title}
          onChange={handleInput}
        />

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Auther Name"
          name="auther"
          value={book.auther}
          onChange={handleInput}
        />
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="description"
          name="description"
          value={book.description}
          onChange={handleInput}
        />
         <input
          id="mail"
          class="form-field"
          type="text"
          placeholder="category"
          name="category"
          value={book.category}
          onChange={handleInput}
        />
        <button class="form-field" type="submit" onClick={postData} >
          Register
        </button>
      </form>
    </div>
  );
}