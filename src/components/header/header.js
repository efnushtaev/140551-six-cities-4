import React from 'react';
import Logo from './logo/logo';
import Navigation from './navigation/navigation';

const Header = () => {
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo/>
        <Navigation/>
      </div>
    </div>
  </header>;
};

export default Header;
