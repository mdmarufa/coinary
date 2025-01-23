import "./h2.scss";

const H2 = ({ title, l }) => {
  return <h1 className={`${l ? "secHeader" : "h1"}`}>{title}</h1>;
};

export default H2;