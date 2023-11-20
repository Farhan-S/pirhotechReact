import React from "react";
import ParticleBG from "./particleBG";
import OurProjects from "./ourProjects";

function About()
{
    return(
        <div className="about">
            <ParticleBG />
            <h1>This is about page</h1>
            <OurProjects />
        </div>
        
    );
}


export default About;