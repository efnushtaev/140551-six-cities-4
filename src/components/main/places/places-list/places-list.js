import React from 'react';
import PropTypes from 'prop-types';
import PlacesCard from '../places-card/places-card';

const PlacesList = (props) => {
  const {className: {classNameDiv = ``, classNameArticle = ``}, mock, onPlaceCardMouseOver} = props;

  return <div className={`${classNameDiv} places__list tabs__content`}>
    {mock.map((e) => {
      return <article key={e.id} onMouseOver={() => {
        onPlaceCardMouseOver(e.id);
      }} className={`${classNameArticle} place-card`}>
        <PlacesCard
          mock={e}
          key={e.id}
          onPlaceCardMouseOver={onPlaceCardMouseOver}/>;
      </article>;
    })}
  </div>;
};

PlacesList.propTypes = {
  className: PropTypes.object,
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
