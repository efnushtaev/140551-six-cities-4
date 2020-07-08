import PlacesList from "./places-list";
import React from 'react';

const PlacesListNear = (props) => {
  const className = {
    classNameDiv: `near-places__list`,
    classNameArticle: `near-places__card`
  }

  return <PlacesList className={className} {...props} />;
}

export default PlacesListNear;
