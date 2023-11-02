import React from "react"

class UserClass extends React.Component{
   
    constructor(props){
        super(props)

        this.state={
           userInfo:{ } 
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/VAIBHAV")
        const json =await data.json();

        this.setState({
            userInfo:json
            
        });

        console.log(json)
    }
    componentDidUpdate(){

   }

     componentWillUnmount(){

   }
   
    render(){
        // const {contact}=this.props
        const {name,location,avatar_url,id}=this.state.userInfo
        
        
        
return(
    <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: 8421083681</h4>
        <h4>Id:{id}</h4>
        </div>
)
    }
}
export default UserClass;