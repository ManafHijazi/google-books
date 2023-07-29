import './Forbidden.scss';

import { FC } from 'react';

import ForbiddenImg from '../../assets/images/403.png';

const ForbiddenLayout: FC = () => {
  return (
    <div className="no-data-result">
      <img src={ForbiddenImg} alt="forbidden" />
    </div>
  );
};

export default ForbiddenLayout;
