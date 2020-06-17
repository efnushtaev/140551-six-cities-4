/* eslint-disable no-debugger */
import React from 'react';
import PropTypes from 'prop-types';

const Main = ({offersCount, placeCardNames, onTitleClick}) => {
  return <div>
    <button onClick={onTitleClick} className={`title`}>Offers count is {offersCount}</button>
    {placeCardNames.map((e) => {
      return <p key={e}>{e}</p>;
    })}</div>;
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired,
  placeCardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default Main;
