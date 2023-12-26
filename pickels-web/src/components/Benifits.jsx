import React, { useEffect, useRef } from "react";
import { healthBenifits } from "../asserts/benifits";
import "../styles/benifits.css";

const ScrollingContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // Clone the items and append them to the end
    const items = container.getElementsByClassName("item-container");
    const cloneItems = Array.from(items).map((item) => item.cloneNode(true));
    cloneItems.forEach((clone) => container.appendChild(clone));

    // Calculate animation duration based on the number of items
    const animationDuration = healthBenifits.length * 2 + "s"; // Adjust as needed

    // Apply animation to the container
    container.style.animation = `scroll ${animationDuration} linear infinite`;

    // Cleanup cloned items and reset animation duration on component unmount
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
