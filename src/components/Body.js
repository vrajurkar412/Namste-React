import resList from "../utils/restrodata";
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

  const [ratedList, SetRatedList]=useState(resList.data) //change to resList.data
  const [searchText,setSearchText]=useState("")

  useEffect(()=>{
    fetchData();
  },[])

const fetchData = async ()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

   const json = await data.json();

   console.log(json);
   
  //  SetRatedList(
  //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
  //  if (ratedList===0) {
  //   return(
  //     <Shimmer/>
  //   )
    
  //  }

    return ratedList.length===0 ? <Shimmer/>:(  
      <div className="Body">
<div className="filter">

    <div className="search">
    <input type="text" className="text-box" value={searchText} 
    onChange={(e)=>{ setSearchText(e.target.value)}}/>
    <button
    onClick={()=>{
      const searchList = ratedList.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
      SetRatedList (searchList);
      console.log("search")
    }}>Search</button>
    </div>

      <div className="filter-btn">
      <button className="filter" 

      onClick={()=>{
        const FilteredList=ratedList.filter((res)=>
         res.avgRating>4
        );
       
    
        SetRatedList(FilteredList)

      }}>Top rated restro</button>
      </div>
      </div>
      <div className="Restro-card" >
     {
      ratedList.map((restaurant)=>{                  // changed resList.data to rstedList
        // console.log('restaurent',restaurant);
        return(<Restaurant key={restaurant.id} resData={restaurant}/>)})
     }
      
      </div>
    
      </div>
    )
    }
export default Body;    