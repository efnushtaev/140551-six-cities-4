/* eslint-disable no-alert */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_COUNT = 137;
const placeCardNames = [`luxurious apartment at great location`, `Wood and stone place`];
const onTitleClick = () => {
  alert(`clicked`);
};

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
      placeCardNames={placeCardNames}
      onTitleClick={onTitleClick}
    />,
    document.getElementById(`root`)
);
