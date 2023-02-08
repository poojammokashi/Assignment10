import { useState, useEffect } from "react";
import { FETCH_URL } from "../config";

const useRestaurant = function(resId){

    const [restaurnat, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_URL+ resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    return restaurnat;
}

export default useRestaurant;