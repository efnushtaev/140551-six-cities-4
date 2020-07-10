import {combineReducers, createStore} from 'redux';
import offersReducer from './reducers/offers-reducer';

let reducers = combineReducers({
  offers: offersReducer
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;
