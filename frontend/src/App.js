import React from "react";
import "./index.css";
import Addbook from "./Addbook.js";
import Bookpreview from "./Bookpreview/Bookpreview.js";
export default function App() {
  
  return (
    <div class="app">
      <Addbook/>
      <Bookpreview/>
    </div>
  );
}