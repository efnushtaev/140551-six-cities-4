import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const PlacesList = ({mock, onPlaceCardMouseOver}) => {
  return <div className="cities__places-list places__list tabs__content">
    {mock.map((e) => {
      return <PlaceCard
        mock={e}
        key={e.id}
        onPlaceCardMouseOver={onPlaceCardMouseOver}/>;
    })}
  </div>;
};

PlacesList.propTypes = {
  onPlaceCardMouseOver: PropTypes.func.isRequired,
  mock: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    srcLink: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    info: PropTypes.shape({
      price: PropTypes.number.isRequired,
      raiting: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  }))
};

export default PlacesList;
