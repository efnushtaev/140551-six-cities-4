import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import offersReducer from './reducers/offers-reducer';
import authReducer from './reducers/auth-reducer';
import thunk from 'redux-thunk';
import {createAPI} from '../api';

let reducers = combineReducers({
  offers: offersReducer,
  auth: authReducer
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
