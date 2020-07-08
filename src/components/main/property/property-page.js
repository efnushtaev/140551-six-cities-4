import React from 'react';
import PropertyGallery from './property-gallery/property-gallery';
import PropertyInside from './property-inside/property-inside';
import PropertyHost from './property-host/property-host';
import PropertyReviews from './property-reviews/property-reviews';
import PorpertyHead from './property-head/property-head';
import Map from './../map/map';
import PlacesListNear from '../places/places-list/places-list--near';
import mock from '../../../mock/offers';

const PropertyPage = () => {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery />
        <div className="property__container container">
          <div className="property__wrapper">
            <PorpertyHead />
            <PropertyInside />
            <PropertyHost />
            <PropertyReviews />
          </div>
        </div>
        <section className="property__map map">
          <Map/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesListNear mock={mock} onPlaceCardMouseOver={() => {}} />
        </section>
      </div>
    </main>
  );
};

export default PropertyPage;

