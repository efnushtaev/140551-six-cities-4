import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_COUNT = 137;

ReactDOM.render(
    <App offersCount={OFFERS_COUNT}/>,
    document.getElementById(`root`)
);
