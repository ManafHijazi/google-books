import './Home.Style.scss';

import { FC } from 'react';

import HeaderComponent from './Sections/Header/Header.Component';

const HomeLayout: FC = () => {
  return (
    <>
      <HeaderComponent />
      <div className="main-layout-wrapper">
        <div className="container-wrapper">Test Layout</div>
      </div>
    </>
  );
};

export default HomeLayout;
