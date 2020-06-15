import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersCount, namePlaceCard} = props;
  return <Main
    offersCount={offersCount}
    namePlaceCard={namePlaceCard} />;
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  namePlaceCard: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
