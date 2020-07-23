import React from 'react';
import Main from './../main/main';
import {withRouter, Route} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../redux/selectors/auth-selectors';

const App = (props) => {

  const {location: {pathname}} = props;
  const _getClassName = () => {
    switch (pathname) {
      case `/`:
        return ` page--gray page--main`;
      case `/login`:
        return ` page--gray page--login`;
      case `/favorites`:
        return ` page__main--favorites`;
      default:
        return ``;
    }
  };
  return (
    <div className={`page${_getClassName()}`}>
      <Header/>
      <Main/>
      <Route exact path={`/favorites`} render={() => <Footer/>} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

let mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state)
})

export default compose(
    connect(mapStateToProps, {}),
    React.memo,
    withRouter)(App);
