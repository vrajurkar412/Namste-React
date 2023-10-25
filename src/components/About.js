import User from "./User"
import UserClass from "./UserClass"


const About =()=>{
    return(
        <div>
        <h1>This is my about</h1>
        <User  name={"Vishal"}/>
        <UserClass name={"Vaibhav"} location={"Wani"} contact={"8421083681"} />
        </div>
    )
}

export default About;