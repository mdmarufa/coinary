import IconDish from "../iconDish/IconDish";
import P from "../p/P";
import "./card1.scss";

const Card1 = ({ icon, title, des }) => {
  return (
    <div className="card1 p-4 pt-5 rounded-3">
      <IconDish icon={icon} />
      <P title={title} ph={true} cs="mb-3" />
      <P title={des} cs="m-0" ps={true} />
    </div>
  );
};

export default Card1;
