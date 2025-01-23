import IconDish from "../iconDish/IconDish";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "./slider.scss";
import { useRef } from "react";

const Slider = ({ contents }) => {
  const containerRef = useRef();

  const handleScroll = (x) => {
    containerRef.current.scrollBy({
      top: 0,
      left: x,
      behavior: "smooth",
    });
  };
  return (
    <div className="HSlicer">
      <div className="slideWrapper" ref={containerRef}>
        <div className="sliceContent mx-auto flex align-items-center justify-content-center gap-4 wf">
          {contents}
        </div>
      </div>
      <div className="sliderBtn mx-auto my-3 flex align-items-center justify-content-between">
        <span onClick={() => handleScroll(-210)}>
          <IconDish sml={true} icon={<FaAngleLeft />} />
        </span>
        <span onClick={() => handleScroll(210)}>
          <IconDish sml={true} icon={<FaAngleRight />} />
        </span>
      </div>
    </div>
  );
};

export default Slider;
