import { LOGO_URL } from "../utils/constants";

const Header =()=>{


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
    </ul>
   
    
    </div>
    
    </div>)
   
  }
  export default Header;