import './Header.Style.scss';

import { FC } from 'react';

import googleBooksLogo from '../../../../assets/images/logo.png';

const HeaderComponent: FC = () => {
  return (
    <div className="header-wrapper">
      <img src={googleBooksLogo} alt="google books" />
    </div>
  );
};

export default HeaderComponent;
