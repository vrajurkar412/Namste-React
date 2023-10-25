import React from "react"

class UserClass extends React.Component{
   
    constructor(props){
        super(props)

        this.state={
            count:"0"
        }
    }

    render(){
        const {name,location,contact}=this.props
        const {count}=this.state
return(
    <div className="user-card">
         <h3>Count:{count}</h3>

         <button className="container" onClick={()=>{
            this.setState({
                count: this.state.count+++1
            })
         }}>Increase</button>
         <button className="container"  onClick={()=>{
            this.setState({
                count: this.state.count---1
            })
         }}>Decrease</button>
         <button className="container"  onClick={()=>{
            this.setState({
                count: this.state.count===1
            })
         }}>Clear</button>

        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        </div>
)
    }
}
export default UserClass;