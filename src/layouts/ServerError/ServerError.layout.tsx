import './ServerError.scss';

import { FC } from 'react';

import ServerErrorImg from '../../assets/images/500.gif';

const ServerErrorLayout: FC = () => {
  return navigator.onLine ? ( // Use ternary operator to return null if navigator.onLine is false
    <div className="no-data-result">
      <img src={ServerErrorImg} alt="server error" />
    </div>
  ) : null;
};

export default ServerErrorLayout;
