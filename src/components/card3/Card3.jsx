import P from "../p/P";
import "./card3.scss";

const Card3 = ({ title, des, icon }) => {
  return (
    <div className="card3 text-center p-4 rounded-3">
      <div className="c3icon mx-auto p-2 flex wf align-items-center justify-content-center rounded-circle">
        {icon}
      </div>
      <P title={title} ph={true} cs={"mb-3"} />
      <P
        cs="m-0"
        ps={true}
        title={des}
      />
    </div>
  );
};

export default Card3;
