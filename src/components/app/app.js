/* eslint-disable no-debugger */
import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = ({offersCount, placeCardNames, onTitleClick}) => {

  return <Main
    offersCount={offersCount}
    placeCardNames={placeCardNames}
    onTitleClick={onTitleClick}
  />;
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  placeCardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
