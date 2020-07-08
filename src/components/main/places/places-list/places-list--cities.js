import PlacesList from "./places-list";
import React from 'react';

const PlacesListCities = (props) => {
  const className = {
    classNameDiv: `cities__places-list`,
    classNameArticle: `cities__place-card`
  }

  return <PlacesList className={className} {...props} />;
}

export default PlacesListCities;
