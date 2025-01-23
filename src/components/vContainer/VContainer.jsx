import { useRef } from "react";
import SectionHead from "../sectionHead/SectionHead";
import "./vContainer.scss";
import IconDish from "../iconDish/IconDish";
import Slider from "../slider/Slider";

const VContainer = ({ top, bottom }) => {
  return (
    <div className="vContainer areaGap">
      <div className="top">{top}</div>
      <div className="left">{bottom}</div>
    </div>
  );
};

export default VContainer;
