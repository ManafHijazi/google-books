import './Home.Style.scss';

import { type ReactNode } from 'react';

import HeaderComponent from './Sections/Header/Header.Component';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <div className="main-layout-wrapper">
        <div className="container-wrapper">{props.children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
