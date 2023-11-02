import  {useEffect, useState}  from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/onlineStatus";

const Header =()=>{
 console.log('header')
const [btnName, setBtnName] =useState("Login")

useEffect(()=>{
console.log('useeffect')
})

const status=onlineStatus()

    return(
      <div className="flex justify-between bg-pink-100  shadow-lg  p-2 m-2 ">
  
    <div >
    <img className="w-60" src={LOGO_URL}/>
    </div>
  
    <div className="flex items-center">
    <ul className=" flex m-15 p-10">
    <li className="px-4">Server status ={status?"On":"Off"}</li>
    <li className="px-4"><Link to="/">Home</Link></li>
    <li className="px-4">
    <Link to="/about">About</Link>
    </li>
    <strong>
    <li className="px-4"><Link to="/contact">Contact</Link></li></strong>
    <li className="px-4">Card</li>
    <button className="login" 
    onClick={()=>{btnName===("Login")?setBtnName("Logout"):setBtnName("Login")}}
    >{btnName}</button>
    </ul>
   
    
    </div>
    
    </div>)
   
  }
  export default Header;