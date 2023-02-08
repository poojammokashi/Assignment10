import { useState, useEffect } from "react";
const useBody = function(){

   
    const[allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&page_type=DESKTOP_WEB_LISTING");
        //console.log(data)
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    return allRestaurants;
}

export default useBody;