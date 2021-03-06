import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {OperationsOffers} from './redux/reducers/offers-reducer';
import {OperationFavorite} from './redux/reducers/favorite-reducer';

store.dispatch(OperationsOffers.loadingOffers());
store.dispatch(OperationFavorite.loadingFavorite());

ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>,
    document.getElementById(`root`)
);
