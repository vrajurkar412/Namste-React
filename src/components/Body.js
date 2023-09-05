import resList from "../utils/restrodata";
import Restaurant from "./Restaurant";
import { useState } from "react";



const Body=()=>{

  const [ratedList, SetRatedList]=useState(resList.data) //change to resList.data

    return(  
      <div className="Body">
    
      <div className="filter-btn">
      <button className="filter" 

      onClick={()=>{
        const FilteredList=ratedList.filter((res)=>
         res.avgRating>4
        );
       
    
        SetRatedList(FilteredList)

      }}>Top rated resto</button>
      </div>
      <div className="Restro-card" >
     {
      ratedList.map(restaurant=>{                  // changed resList.data to rstedList
        // console.log('restaurent',restaurant);
        return(<Restaurant key={restaurant.id} resData={restaurant}/>)})
     }
      
      </div>
    
      </div>
    )
    }
export default Body;    