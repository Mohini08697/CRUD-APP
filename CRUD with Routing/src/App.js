import React from "react";
import "./style.css";
import Home from './pages/Home'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

export default function App() {
  return (
    <div style={{backgroundColor:'darkblue'}} >
      <Router>
         <Home/> 
      </Router>  
       
    </div>
  );
}
