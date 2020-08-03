import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {createAPI} from '../api';
import thunk from 'redux-thunk';
import reducerOffers from './reducers/offers-reducer';
import reducerAuth from './reducers/auth-reducer';
import reducerProperty from './reducers/property-reducer';
import reducerFavorite from './reducers/favorite-reducer';

let reducers = combineReducers({
  offers: reducerOffers,
  auth: reducerAuth,
  property: reducerProperty,
  favorite: reducerFavorite
});

const api = createAPI();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
