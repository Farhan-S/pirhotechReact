import React from "react";
import ParticleBG from "./particleBG";
import ProjectManage from "./projectManage";

function About()
{
    return(
        <div className="about">
            <ParticleBG />
            <h1>This is about page</h1>
            <ProjectManage />
        </div>
        
    );
}


export default About;