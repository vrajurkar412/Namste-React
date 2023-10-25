import  {useEffect, useState}  from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header =()=>{
 console.log('header')
const [btnName, setBtnName] =useState("Login")

useEffect(()=>{
console.log('useeffect')
})

    return(
      <div className="header">
  
    <div >
    <img className="logo" src={LOGO_URL}/>
    </div>
  
    <div className="Navitems">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li>
    <Link to="/about">About</Link>
    </li>
    <li><Link to="/contact">Contact</Link></li>
    <li>Card</li>
    <button className="login" 
    onClick={()=>{btnName===("Login")?setBtnName("Logout"):setBtnName("Login")}}
    >{btnName}</button>
    </ul>
   
    
    </div>
    
    </div>)
   
  }
  export default Header;