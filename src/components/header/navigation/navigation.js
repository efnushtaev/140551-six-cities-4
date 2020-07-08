import React from 'react';
import NavigationItem from './navigation-item/navigation-item';
import ProfileLink from './profile-link/profile-link';

const Navigation = () => {
  return <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <NavigationItem render={() => <ProfileLink/>}/>
      </li>;
    </ul>
  </nav>;
};

export default Navigation;
