import './NotFound.scss';

import { FC } from 'react';

import pageNotFoundImg from '../../assets/images/404.gif';

const NotFoundLayout: FC = () => {
  return (
    <div className="no-data-result">
      <img src={pageNotFoundImg} alt="page not found" />
    </div>
  );
};

export default NotFoundLayout;
