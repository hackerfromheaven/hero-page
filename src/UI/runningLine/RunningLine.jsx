import "./style.css";
import { hoveredText} from "../../redux/cursor.slice/cursor.slice";
import { useDispatch } from "react-redux";
export default function RunningLine() {
  const dispatch = useDispatch()
  return (
    <div onMouseEnter={()=>{dispatch(hoveredText(true))}} onMouseLeave={()=>{dispatch(hoveredText(false))}} className="typing-text" className="marquee">
      <ul className="marquee-content">
        <li className="marquee-item">Marketing</li>
        <li className="marquee-item">UI/UX Design</li>
        <li className="marquee-item">Web Development</li>
        <li className="marquee-item">Mobile Development</li>
        <li className="marquee-item">System Integration</li>
        <li className="marquee-item">SEO</li>
        <li className="marquee-item">Data Analysis</li>
      </ul>
      <ul className="marquee-content">
        <li className="marquee-item">Marketing</li>
        <li className="marquee-item">UI/UX Design</li>
        <li className="marquee-item">Web Development</li>
        <li className="marquee-item">Mobile Development</li>
        <li className="marquee-item">System Integration</li>
        <li className="marquee-item">SEO</li>
        <li className="marquee-item">Data Analysis</li>
      </ul>
    </div>
  );
}
