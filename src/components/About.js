import User from "./User"
import UserClass from "./UserClass"


const About =()=>{
    return(
        <div>
        <h1>This is my about</h1>
        <UserClass  />
        <User  name={"Vishal"}/>
       
        </div>
    )
}

export default About;