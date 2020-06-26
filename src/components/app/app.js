/* eslint-disable no-debugger */
import React from 'react';
import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path={`/`} render={() => <Main/>} />
    </Switch>
  </BrowserRouter>;
};

export default App;
