import { CDN_URL } from "../utils/constants"


const Restaurant=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,areaName,cuisines,costForTwo,avgRating,id}=resData
    // console.log('cloudinaryImageId',cloudinaryImageId);
  
    return(
     <div className="Restaurant">
     <img className="image" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
     <h3 >{name}</h3>
     <h4>{areaName}</h4>
     <h4>{cuisines.join(", ")}</h4>
     <h4>{costForTwo}</h4>
     <h4>{avgRating}</h4>
     
     </div>
    )
   }
 export default Restaurant;  