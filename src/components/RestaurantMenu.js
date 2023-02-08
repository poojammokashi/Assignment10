import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import UserContext from '../utils/UserContext'

const RestaurantMenu = function(){
    // const params = useParams();
    // const {id} = params;
    const {resId} = useParams();
    const restaurnat = useRestaurant(resId)
    
    //console.log(params);
    
    // if(!restaurnat){
    //     return <Shimmer/>
    // }
    return !restaurnat ? (<Shimmer/>) : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {resId}</h1>
                <h2>{restaurnat?.name}</h2>
                <img src={CDN_IMG + restaurnat?.cloudinaryImageId}/>
                <h3>{restaurnat?.area}</h3>
                <h4>{restaurnat?.city}</h4>
                <h3>{restaurnat?.avgRating} stars</h3>
                <h4>{restaurnat?.costForTwoMsg}</h4>
                
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurnat?.menu?.items).map((item)=>(
                            <li key={item.resId}>{item.name}</li>
                        ))
                    }
                    

                </ul>

{/* <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
           <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
            </div>
        </div>
    )
}

export default RestaurantMenu;