import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Fotter = function(){
    const {user} = useContext(UserContext)
    return (
        <div className="flex justify-center">
            <h2><strong>Developed by {user.name} - {user.email}</strong></h2>
        </div>
    )
    }

export default Fotter;