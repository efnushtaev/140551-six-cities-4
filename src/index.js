import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_COUNT = 137;
const NAME_PLACE_CARD = [`luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
      namePlaceCard={NAME_PLACE_CARD} />,
    document.getElementById(`root`)
);
