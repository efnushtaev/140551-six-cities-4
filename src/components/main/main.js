import React from 'react';
import CitiesPlaces from './cities-places/cities-places';
import {Switch, Route} from 'react-router-dom';
import PropertyPage from './property/property-page';
import Favorites from './favorites/favorites';
import LoginPage from './login-page/login-page';

const Main = () => {
  return <Switch>
    <Route exact path={`/`} render={() => <CitiesPlaces/>} />
    <Route exact path={`/property`} render={() => <PropertyPage/>} />
    <Route exact path={`/favorites`} render={() => <Favorites/>} />
    <Route exact path={`/login`} render={() => <LoginPage/>} />
  </Switch>
};

export default React.memo(Main);
