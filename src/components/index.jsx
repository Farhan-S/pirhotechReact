import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticleBG from "./particleBG";
import OurServices from "./ourServices";
import StatusCounter from "./statusCounter";
import Products from "./products";



function Index() {
    const [text] = useTypewriter({
        words: ['Web Development', 'App Development', 'SEO', 'Games Developing'],
        loop: 0

    });

    return (
        <div className="main">
            <div className="headerDes">
                <ParticleBG />
                <div className="headerDesMid">
                    <h1 className="comName">PiRhoTech</h1>
                    <p>A Bit of Spark</p>
                    <h1>We provide you {" "}
                        <span>{text}</span>
                        <Cursor cursorColor='red' />
                        Services
                    </h1>
                </div>
            </div>
            <OurServices />
            <StatusCounter />
            <Products />

            
        </div>


    );
}


export default Index;