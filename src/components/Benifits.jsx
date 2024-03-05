import React, { useEffect, useRef } from "react";
import { healthBenifits } from "../asserts/benifits";
import "../styles/benifits.css";

const ScrollingContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
   const items = container.getElementsByClassName("item-container");
    const cloneItems = Array.from(items).map((item) => item.cloneNode(true));
    cloneItems.forEach((clone) => container.appendChild(clone));

   const animationDuration = healthBenifits.length * 2 + "s"; 

    container.style.animation = `scroll ${animationDuration} linear infinite`;
    return () => {
      cloneItems.forEach((clone) => container.removeChild(clone));
      container.style.animation = "none";
    };
  }, []);

  return (
    <div className="main-container-static">
      <div className="scroll-container" ref={containerRef}>
        {healthBenifits.map((item, index) => (
          <div className="item-container" key={index}>
            <img src={item.icon} alt=""  draggable="false" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingContent;
