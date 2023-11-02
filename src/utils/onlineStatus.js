import { useEffect , useState } from "react";

const onlineStatus =()=>{
   const [status,setStatus]= useState(true);

   useEffect(()=>{
    window.addEventListener("offline",()=>{
        setStatus(false)
    });
   
        window.addEventListener("online",()=>{
            setStatus(true)
        })
    
   },[])
 return status;
}

export default onlineStatus;