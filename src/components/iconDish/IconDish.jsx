import "./iconDish.scss";

const IconDish = ({ icon, sml }) => {
  return (
    <div className={`iconDish user-select-none flex align-items-center justify-content-center rounded-circle ${sml && "smlW"}`}>
      {icon}
    </div>
  );
};

export default IconDish;
