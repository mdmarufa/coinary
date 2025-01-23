import "./container.scss";

const Container = ({ leftCon, rightCon, m, mb, mt }) => {

  const s = m ? {marginBlock: m} : mb ? {marginBottom: mb} : {marginBottom: mt}
  console.log(s)
  const customStyle = {s};

  return (
    <div className={`containerx areaGap flex align-items-center justify-content-center`} style={s}>
      <div className="left flex align-items-center justify-content-center">
        {leftCon}
      </div>
      <div className="right flex align-items-center justify-content-center">
        {rightCon}
      </div>
    </div>
  );
};

export default Container;
