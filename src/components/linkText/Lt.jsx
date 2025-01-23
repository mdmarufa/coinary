import "./lt.scss";

const Lt = ({title, hover, colorize}) => {
  return <span className={`lt ${hover && "lth"} ${colorize && "colorize"}`}>{title}</span>;
};

export default Lt;
