import { useEffect, useState } from "react";
import "./style.css";
import { hoveredText} from "../../redux/cursor.slice/cursor.slice";
import { useDispatch } from "react-redux";
export default function TypingText() {
  const [greetings, setGreetings] = useState("...");
const dispatch = useDispatch()
  useEffect(() => {
    let isActive = true;

    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

    const animateText = async () => {
      while (isActive) {
        setGreetings("...");
        await sleep(1000);

        setGreetings("");
        await sleep(500);

        const initialText = "Hi, ";
        for (const character of initialText) {
          if (!isActive) return;
          setGreetings((prev) => prev + character);
          await sleep(50);
        }
        await sleep(2000);

        const secondText =
          "We are the architects of the digital realm, where lines of code are the fabric of reality itself";
        for (const character of secondText) {
          if (!isActive) return;
          setGreetings((prev) => prev + character);
          await sleep(50);
        }
        await sleep(3000);

        const thirdText =
          ". As we bend the rules of technology, we create worlds that exist beyond the surface, where every interaction is a calculated move in the game ";
        for (const character of thirdText) {
          if (!isActive) return;
          setGreetings((prev) => prev + character);
          await sleep(50);
        }
        await sleep(7000);

        for (let i = thirdText.length; i >= 1; i--) {
          if (!isActive) return;
          setGreetings((prev) => prev.slice(0, i));
          await sleep(50);
        }

        setGreetings("...");
        await sleep(1000);

        setGreetings("");
        await sleep(500);

        const secondMes = " Join us, and see through the illusion—our mission is to shape the future by rewriting the code of tomorrow";
        for (const character of secondMes) {
          if (!isActive) return;
          setGreetings((prev) => prev + character);
          await sleep(50);
        }
        await sleep(7000);

        for (let i = secondMes.length; i >= 1; i--) {
          if (!isActive) return;
          setGreetings((prev) => prev.slice(0, i));
          await sleep(50);
        }
      }
    };

    animateText();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <p className="typing-text">
      <span onMouseEnter={()=>{dispatch(hoveredText(true))}} onMouseLeave={()=>{dispatch(hoveredText(false))}}>{greetings}</span>
      <span className="blinking-cursor">_</span>
    </p>
  );
}
