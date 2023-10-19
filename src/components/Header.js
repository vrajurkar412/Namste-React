import  {useState}  from "react";
import { LOGO_URL } from "../utils/constants";


const Header =()=>{

const [btnName, setBtnName] =useState("Login")

    return(
      <div className="header">
  
    <div >
    <img className="logo" src={LOGO_URL}/>
    </div>
  
    <div className="Navitems">
    <ul  >
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Card</li>
    <button className="login" 
    onClick={()=>{btnName===("Login")?setBtnName("Logout"):setBtnName("Login")}}
    >{btnName}</button>
    </ul>
   
    
    </div>
    
    </div>)
   
  }
  export default Header;