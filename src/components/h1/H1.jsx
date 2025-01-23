import "./h1.scss";

const H1 = ({ title, children }) => {

  const innerValues = title ? title : children;

  return <h1 className="h1">{innerValues}</h1>;
};

export default H1;
