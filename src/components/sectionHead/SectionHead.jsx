import Lt from "../linkText/Lt";
import P from "../p/P";
import "./sectionHead.scss";

const SectionHead = ({ about, title, des, children, cs }) => {
  return (
    <div className={`w100 m-auto ${cs} sectionHead`}>
      <Lt title={about} colorize={true} />
      <P title={title} l={true} />
      <P
        title={des}
      />
      {children}
      <br />
    </div>
  );
};

export default SectionHead;
