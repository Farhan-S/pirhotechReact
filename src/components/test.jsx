import React from "react";
import "../css/text.css";
import { useSpring,animated } from '@react-spring/web';



const calc= (x, y)=> [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1];
const trans =(x, y, s)=> `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function Test()
{
    const [props, set]= useSpring(()=>({xys: [0,0,1], config: {mass:10, tension:200, friction:50}}))
    return(
        <animated.div
         className="boxxx"
         onMouseMove={({clientX: x , clientY: y}) => (set({xys: calc(x, y)}))}
         onMouseLeave={() => set({xys:[0,0,1]})}
         style={{
            transform: props.xys.interpolate(trans)
         }}
         >
            <h1>something</h1>
            <p>some text </p>
            </animated.div>
    );
}



export default Test;