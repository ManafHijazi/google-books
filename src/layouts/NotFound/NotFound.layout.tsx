import './NotFound.scss';

import { FC } from 'react';

import pageNotFoundImg from '../../assets/images/404.gif';

const NotFoundLayout: FC = () => {
  return navigator.onLine ? ( // Use ternary operator to return null if navigator.onLine is false
    <div className="no-data-result">
      <img src={pageNotFoundImg} alt="page not found" />
    </div>
  ) : null;
};

export default NotFoundLayout;
