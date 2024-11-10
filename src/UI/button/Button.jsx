import "./style.css";
import { hoveredBtn } from "../../redux/cursor.slice/cursor.slice";
import { useDispatch } from "react-redux";
export default function Button() {
  const dispatch = useDispatch();
  return (
    <buttonv
      onMouseEnter={() => {
        dispatch(hoveredBtn(true));
      }}
      onMouseLeave={() => {
        dispatch(hoveredBtn(false));
      }}
      className="button-go"
    >
      let's start
    </buttonv>
  );
}
