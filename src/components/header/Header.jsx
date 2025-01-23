import PrimaryBtn from "../button/PrimaryBtn";
import Lt from "../linkText/Lt";
import PrimaryLogo from "../primaryLogo/PrimaryLogo";
import "./header.scss";

const Header = () => {
  return (
    <header className="areaGap flex align-items-center justify-space-between">
      <PrimaryLogo />
      <div className="headerLinks">
        <Lt title={"Home"} hover={true} />
        <Lt title={"About"} hover={true} />
        <Lt title={"Out App"} hover={true} />
        <Lt title={"Pages"} hover={true} />
        <Lt title={"Token Sale"} hover={true} />
      </div>

      <PrimaryBtn title={"Download App"} h={true} />
    </header>
  );
};

export default Header;
