import './Header.Style.scss';

import { FC } from 'react';
import { useNavigate } from 'react-router';

import googleBooksLogo from '../../../../assets/images/logo.png';

const HeaderComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <button onClick={() => navigate('/')}>
        <img width="50px" height="30px" src={googleBooksLogo} alt="google books" />
      </button>
    </div>
  );
};

export default HeaderComponent;
