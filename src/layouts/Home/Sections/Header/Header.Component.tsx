import './Header.Style.scss';

import { FC } from 'react';

import googleBooksLogo from '../../../../assets/images/logo.png';

const HeaderComponent: FC = () => {
  return (
    <div className="header-wrapper">
      <img width="50px" height="30px" src={googleBooksLogo} alt="google books" />
    </div>
  );
};

export default HeaderComponent;
