import resList from "../utils/restrodata";
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import onlineStatus from "../utils/onlineStatus";



const Body=()=>{

  const [ratedList, SetRatedList]=useState(resList.data) //change to resList.data
const [filteredRestro, setFilteredRestro]=useState(resList.data)

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

  const status=onlineStatus()
  if (status===false) {
    return <h1>OOPS!</h1>
  }

    return ratedList.length===0 ? <Shimmer/>:(  
      <div className="Body">
<div className="filter flex">

    <div className="search m-2 p-2">
    <input type="text" className="border border-solid border-black" value={searchText} 

    onChange={(e)=>{ setSearchText(e.target.value)}}/>
    
    <button className="m-2 p-0.5 bg-pink-100  rounded-md "
    onClick={()=>{
      const searchList = ratedList.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))

      setFilteredRestro (searchList);
      
    }}>Search</button>
    </div>

      <div className="filter-btn m-2 p-2 ">
      <button className="m-2 p-0.5 bg-pink-100  flex rounded-md" 

      onClick={()=>{
        const FilteredList=ratedList.filter((res)=>
         res.avgRating>4
        );
       
    
        SetRatedList(FilteredList)

      }}>Top rated restro</button>
      </div>
      </div>
      <div className=" flex flex-wrap" >
     {
      filteredRestro.map((restaurant)=>{                  // changed resList.data to rstedList
        // console.log('restaurent',restaurant);
        return(<Restaurant key={restaurant.id} resData={restaurant}/>)})
     }
      
      </div>
    
      </div>
    )
    }
export default Body;    