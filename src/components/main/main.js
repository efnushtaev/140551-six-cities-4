import React from 'react';
import CitiesPlaces from './cities-places/cities-places';
import {Switch, Route, withRouter} from 'react-router-dom';
import PropertyPage from './property/property-page';
import Favorites from './favorites/favorites';
import LoginPage from './login-page/login-page';
import {compose} from 'redux';

const Main = () => {
  return <Switch>
    <Route exact path={`/`} render={() => <CitiesPlaces/>} />
    <Route exact path={`/property/:offerId?`} render={() => <PropertyPage/>} />
    <Route exact path={`/favorites`} render={() => <Favorites/>} />
    <Route exact path={`/login`} render={() => <LoginPage/>} />
  </Switch>;
};

export default compose(
    withRouter,
    React.memo)(Main);
