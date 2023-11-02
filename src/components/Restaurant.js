import { CDN_URL } from "../utils/constants"


const Restaurant=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,
      name,
      areaName,
      cuisines,
      costForTwo,
      avgRating,
      id}=resData
    // console.log('cloudinaryImageId',cloudinaryImageId);
  
    return(
     <div className="m-2 p-2 w-[200px] border border-spacing-1 bg-pink-100 rounded-md couser cursor-pointer  hover:bg-slate-300">
     <img className=" rounded-e-md" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
     <h3 className="font-bold p-1.5">{name}</h3>
     <h4 className="p-1">{areaName}</h4>
     <h4 className="p-1">{cuisines.join(", ")}</h4>
     <h4 className="p-1">{costForTwo}</h4>
     <h4 className="p-1">{avgRating}</h4>
     
     </div>
    )
   }
 export default Restaurant;  