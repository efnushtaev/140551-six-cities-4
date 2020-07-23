import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {OperationsOffers} from './redux/reducers/offers-reducer';

store.dispatch(OperationsOffers.loadingOffers());

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById(`root`)
);
