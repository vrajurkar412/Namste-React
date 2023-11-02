import { useState,useEffect } from "react";

const User=(props)=>{
  
    const[count,setCount]=useState("Started")

    useEffect(()=>{

    },[])

    return(
        <div className="user-card">
        <h3>count:{count}</h3>
        <button onClick={()=>{
            setCount(1)
        }} ></button>
        <h3>Name: {props.name}</h3>
        <h3>Location: Wani</h3>
        <h4>Contact: 8421083681</h4>
        </div>
    )
}

export default User;