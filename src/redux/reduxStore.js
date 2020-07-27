import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {createAPI} from '../api';
import thunk from 'redux-thunk';
import offersReducer from './reducers/offers-reducer';
import authReducer from './reducers/auth-reducer';
import reducerProperty from './reducers/property-reducer';
import reducerFavorite from './reducers/favorite-reducer';

let reducers = combineReducers({
  offers: offersReducer,
  auth: authReducer,
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
