import { CDN_IMG } from "../config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = function({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravel,
    
  })
  {
    const {user} = useContext(UserContext)
      return(
          <div className="w-[250px] p-2 m-2 shadow-xl">
              {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
              restaurantlist[2].data?.cloudinaryImageId}/>
              <h2>{restaurantlist[2].data?.name}</h2>
              <h3>{restaurantlist[2].data?.cuisines.join(",")}</h3>
              <h4>{restaurantlist[2].data.lastMileTravel}minutes</h4> */}
  
              <img src={CDN_IMG+cloudinaryImageId}/>
              <h2 className="font-bold text-2xl">{name}</h2>
              <p>{cuisines.join(",")}</p>
              <h4>{lastMileTravel}</h4>
              {/* <h4>{user.name}</h4> */}
              <h5>{user.name}</h5>
            <h6>{user.email}</h6>
          </div>
      )
  }

  export default RestaurantCard;