import { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
export default function Cursor() {
  const { isHoveredOnBtn, isHoveredOnText } = useSelector(
    (state) => state.cursor
  );
  const [posX, setPosX] = useState("0px");
  const [posY, setPosY] = useState("0px");

  const updateCursorPosition = (e) => {
    setPosX(`${e.pageX - 10}px`);
    setPosY(`${e.pageY - 10}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div
      style={{
        top: posY,
        left: posX,
        transform: `scale(${ isHoveredOnText ? 3 : isHoveredOnBtn ? 2.5 : 1})`,
        border: isHoveredOnText ? '2px solid orange' : 'none',
        mixBlendMode: isHoveredOnBtn ? 'difference' : 'normal',
        backgroundColor: isHoveredOnText 
        ? 'transparent' 
        : isHoveredOnBtn 
        ? 'white' 
        : 'red'
      }}
      className="cursor"
    ></div>
  );
}
