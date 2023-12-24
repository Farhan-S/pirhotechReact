import React, { useRef, useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import "../css/text.css";



function Test2() {

    const cardRef = useRef(null);

  useEffect(() => {
    let currentRef = cardRef.current;

    if (currentRef) {
      const vanillaTiltInstance = VanillaTilt.init(currentRef, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });

      return () => {
        if (vanillaTiltInstance) {
          vanillaTiltInstance.destroy();
        }
      };
    }
  }, []);

    return (
        <div ref={cardRef} className="boxxx">
            <h1>tilt effect</h1>
            <p>something about this</p>
        </div>
    );
}

export default Test2;