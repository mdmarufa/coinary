import { useState } from "react";
import IconDish from "../iconDish/IconDish";
import P from "../p/P";
import "./card2.scss";

const Card2 = ({ icon, title, des, children }) => {
  const [deg, setDeg] = useState(0)
  return (
    <div className="card2Pad rounded-3" style={{"--d": `${deg}deg`}}>
      <div className="card2 p-4 pt-5 rounded-3 text-center" onMouseMove={(e) => {
      const rect = e.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2; // Center X
      const centerY = rect.top + rect.height / 2; // Center Y

      // Get click coordinates
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Calculate relative coordinates from the center
      const relativeX = clickX - centerX;
      const relativeY = clickY - centerY;

      // Calculate angle in radians and convert to degrees
      let angleInRadians = Math.atan2(relativeY, relativeX); // atan2(y, x)
      let angleInDegrees = (angleInRadians * 180) / Math.PI; // Convert to degrees

      // Adjust angle to be in the range 0-360
      if (angleInDegrees < 0) {
        angleInDegrees += 360;
      }

      setDeg(angleInDegrees)
    }}>
        <div className="wf mx-auto">
          <IconDish icon={icon} />
        </div>
        <P title={title} ph={true} cs="mb-3" />
        <P title={des} cs="m-0" ps={true} />

        {children}
      </div>
    </div>
  );
};

export default Card2;
