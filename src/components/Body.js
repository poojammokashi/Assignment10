import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {restaurantlist } from "../config"
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
    

  const Body = function({user}){
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
   // const [filteredRestaurants, setFilteredRestaurants] = useBody([]);
    //console.log(restaurants)
    
    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);

    console.log(useState);

    
    const isOnline = useOnline();
    
     if (!isOnline) {
         return <h1>🔴 Offline, please check your internet connection!!</h1>;
      }
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&page_type=DESKTOP_WEB_LISTING");
        console.log(data)
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0)
    // return <h1>No Restraunt match your Filter!!</h1>;

    return allRestaurants?.length === 0 ? (
       < Shimmer/>
        ) :(
        <>
        <div className="p-2 bg-orange-200 my-2">
            <input className="focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm" placeholder="Search for Restaurant... " type="text"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button
         className="search-btn px-2 mx-2 bg-zinc-600 text-white rounded-md hover:bg-green-400"
        onClick={() => {
          //need to filter the data
           const data = filterData(searchText, allRestaurants);
           // update the state - restaurants
          setFilteredRestaurants(data);        }}
      >
        Search
      </button>
        </div>
         <div className='flex flex-wrap'>
            {
            filteredRestaurants.map((restaurant) =>{
              return(
                <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                  <RestaurantCard{...restaurant.data} user={user} />
                  </Link>
                ) 
              })
            }
        </div>
        </>
    )
    }

   

    export default Body;