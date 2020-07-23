import React from 'react';
import {NavLink} from 'react-router-dom';
import {getAuthStatus, getUserEmail} from '../../../../redux/selectors/auth-selectors';
import {connect} from 'react-redux';

const ProfileLink = (props) => {
  return props.isAuth
    ? <NavLink to={`/favorites`} className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">{props.userEmail}</span>
    </NavLink>
    : <NavLink to={`/login`} className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">Sign In</span>
    </NavLink>
};

let mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state),
  userEmail: getUserEmail(state)
})

export default connect(mapStateToProps, {})(ProfileLink);
