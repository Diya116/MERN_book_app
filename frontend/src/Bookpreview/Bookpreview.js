import React from 'react'
import  { useState,useEffect } from 'react';
import "./bookpreview.css"
import Onebook from './Onebook';
function Bookpreview() {
    const[data,setdata]=useState([]);
    const getdata=async()=>{
        const res=await fetch("/api/book",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }) 
        const data=await res.json();
        setdata(data);
        console.log(data);
        console.log("hello")
       console.log(data[0].title);
    }
    useEffect(() => {
        getdata();
      },[]);

  return (
    <div className='preview'>
        <h1>All Available book</h1>
        <div className="books">
            {
                data.map((book)=>{
                    return(
                        <Onebook title={book.title} auther={book.auther} description={book.description} category={book.category}/>
                    )
                })
            }
        </div>      
    </div>
  )
}

export default Bookpreview
