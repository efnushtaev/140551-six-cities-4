import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = () => {
  return <div className="header__left">
    <NavLink to={`/`} className="header__logo-link header__logo-link--active">
      <img className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81" height="41"/>
    </NavLink>
  </div>
};

export default Logo;
