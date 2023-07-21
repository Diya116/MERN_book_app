import React from 'react'
import "./bookpreview.css"
function Onebook(params) {
  return (

       <div className="book">
                <div className="title">{params.title}</div>
                <div className="auther">{params.auther}</div>
                <div className="description">{params.description}</div>
                <div className="category">{params.category}</div>
                </div>
    
  )
}

export default Onebook
