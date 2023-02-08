import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
 // API call to check authentication
 return false;
};

const Title = function(){
    return (
        <a href="/">
        <img className="h-24 pl-2 py-1 pb-0" alt="logo" src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
    </a>
    );
};

const HeaderComponent = function(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div className="flex justify-between bg-orange-200">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to='/'>
                        <li className="px-2 text-red-900">Home</li>
                    </Link>
                    <li className="px-2 text-red-900"><Link to='/about'>About</Link></li>
                    <li className="px-2 text-red-900"><Link to='/contact'>Contact</Link></li>
                    <li className="px-2 text-red-900">Cart</li>
                    <li className="px-2 text-red-900"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            <span className="p-5 font-bold text-red-900">{user.name}</span>
            {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
     ) : (
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    )}
        </div>
    )
}

export default HeaderComponent;
  
  //actual how our data is present in object
  
  /*const burgerking = {
      name: "Burger King",
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhup2ew1evf3espl5fgs",
      cusines: ["Burgers" ,"America"], //this will be in the form of array
      rating:"4.2"
  }*/
  
  
  
  
  
  