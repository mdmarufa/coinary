import "./p.scss";

const P = ({ title, l, cs, ps, ph, sss}) => {
  return (
    <p className={`${l ? "pl" : "p"} ${ps ? "ps" : ""} ${ph ? "ph" : ""} ${sss ? "sss" : ""} ${cs}`}>{title}</p>
  );
};

export default P;