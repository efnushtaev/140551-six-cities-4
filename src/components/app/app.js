import React from 'react';
import Main from './../main/main';
import {withRouter, Route} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';

const App = (props) => {
  const {location: {pathname}} = props;

  const getClassName = () => {
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

  return <div className={`page${getClassName()}`}>
    <Header/>
    <Main/>
    <Route exact path={`/favorites`} render={() => <Footer/>} />
  </div>;
};

App.propTypes = {
  location: PropTypes.object
};

export default withRouter(App);
