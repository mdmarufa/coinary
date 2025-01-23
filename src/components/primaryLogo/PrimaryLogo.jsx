import PrimaryLogoIcon from '../../assets/svg/primaryLogoIcon.svg?react';

import "./primaryLoog.scss";

const PrimaryLogo = () => {
  return (
    <div className="primaryLogo flex align-items-center justify-content-center wf">
      <PrimaryLogoIcon />
      <div className="plt">Coinary</div>
    </div>
  );
};
export default PrimaryLogo;
