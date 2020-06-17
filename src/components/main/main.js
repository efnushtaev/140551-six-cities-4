import React from 'react';
import PropTypes from 'prop-types';

const Main = ({offersCount, namePlaceCard}) => {
  return <div>
    <span>Offers count is {offersCount}</span>
    {namePlaceCard.map((e) => {
      return <p key={e}>{e}</p>;
    })}</div>;
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired,
  namePlaceCard: PropTypes.arrayOf(PropTypes).isRequired
};

export default Main;
