import Header from "../components/Header";
import Cursor from "../UI/cursor/Cursor";
import TypingText from "../UI/typingText/TypingText";
import Button from "../UI/button/Button";
import "./style.css";
import { hoveredText} from "../redux/cursor.slice/cursor.slice";
import { useDispatch } from "react-redux";
import RunningLine from "../UI/runningLine/RunningLine";
export default function Home() {
const dispatch = useDispatch()
  return (
    <div className="home">
      <Header></Header>
      <div className="text-container">
        <h1 onMouseEnter={()=>{dispatch(hoveredText(true))}} onMouseLeave={()=>{dispatch(hoveredText(false))}}>DevCompany Entertainment</h1>
        <h2 onMouseEnter={()=>{dispatch(hoveredText(true))}} onMouseLeave={()=>{dispatch(hoveredText(false))}}>Make Your Unique App</h2>
        <TypingText></TypingText>
        <Button></Button>
      </div>
<RunningLine></RunningLine>
      <Cursor></Cursor>
    </div>
  );
}
