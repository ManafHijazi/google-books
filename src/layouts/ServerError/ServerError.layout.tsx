import './ServerError.scss';

import { FC } from 'react';

import ServerErrorImg from '../../assets/images/500.gif';

const ServerErrorLayout: FC = () => {
  return (
    <div className="no-data-result">
      <img src={ServerErrorImg} alt="server error" />
    </div>
  );
};

export default ServerErrorLayout;
