import { Outlet } from "react-router-dom";

const About = function(){
    return(
        <>
            <h1>Tell Me about Yourself</h1>
            <h3>Its Good to Know about you</h3>
            <Outlet/>
        </>
    )
}
export default About;