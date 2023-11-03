import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function ParticleBG()
{

    const loadparticles = useCallback(async engine => {
        
        await loadFull(engine);
    }, []);


    return(
        <Particles 
        id="tsparticles"
        init={ loadparticles }
        options={{
            background: {
                color: {
                    value: "#111111",
                },
            },
            fullScreen: {
                "enable": true,
                "zIndex": -2
              },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffff",
                },
                links: {
                    color: "#ffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
        />
    );
}


export default ParticleBG;