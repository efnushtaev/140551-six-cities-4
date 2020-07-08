import React from 'react';
import PlacesListCities from './../places/places-list/places-list--cities';
import Map from './../map/map';
import mock from './../../../mock/offers';
import TabsList from '../tabs-list/tabs-list';
import PlacesSort from './places-sort/places-sort';

const CitiesPlaces = () => {
  return <div className='page__main page__main--index'>
    <div className="tabs">
      <TabsList />
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <PlacesSort />
          <PlacesListCities mock={mock} onPlaceCardMouseOver={() => {}} />
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  </div>;
};

export default CitiesPlaces;
