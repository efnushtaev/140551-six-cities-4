import React from 'react';
import Main from './../main/main';
import {withRouter, Route} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import {compose} from 'redux';

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
  location: PropTypes.object
};

export default compose(React.memo, withRouter)(App);
