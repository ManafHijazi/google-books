import './Forbidden.scss';

import { FC } from 'react';

import ForbiddenImg from '../../assets/images/403.png';

const ForbiddenLayout: FC = () => {
  return navigator.onLine ? ( // Use ternary operator to return null if navigator.onLine is false
    <div className="no-data-result">
      <img src={ForbiddenImg} alt="forbidden" />
    </div>
  ) : null;
};

export default ForbiddenLayout;
