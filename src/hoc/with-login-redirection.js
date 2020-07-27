import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getAuthStatus} from './../redux/selectors/auth-selectors'

const withLoginRedirection = (Component) => {
  class WithLoginRedirection extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return this.props.isAuth
        ? <Component {...this.props} />
        : <Redirect to={'/login'} />
    }
  }

  WithLoginRedirection.propTypes = {};

  let mapStateToProps = (state) => ({
    isAuth: getAuthStatus(state)
  })

  return connect(mapStateToProps, {})(WithLoginRedirection);
};

export default withLoginRedirection;
