import Lt from '../linkText/Lt';
import './primaryBtn.scss';

const PrimaryBtn = ({title, h, outline, LIcon, RIcon}) => {
  return (
    <button className={`${outline ? "primaryBtnOutline" : "primaryBtn"} ${h ? "btnH" : ""}`}>
      {LIcon}
      <Lt title={title} />
      {RIcon}
  </button>
  )
}

export default PrimaryBtn;