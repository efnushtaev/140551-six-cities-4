import React from 'react';
// import PropTypes from 'prop-types';
import mock from './../../mock/offers';
import PlacesList from './places-list/places-list';

const Main = () => {
  return <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <PlacesList mock={mock} onPlaceCardMouseOver={()=>{}} />
      </section>
    </div>
  </div>;
};

export default Main;
