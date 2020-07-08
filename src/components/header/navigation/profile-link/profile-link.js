import React from 'react';

const ProfileLink = () => {
  return <a className="header__nav-link header__nav-link--profile" href="#">
    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
  </a>;
};

export default ProfileLink;
