import React from 'react';

const PorpertyHead = () => {
  return <>
    <div className="property__mark">
      <span>Premium</span>
    </div>
    <div className="property__name-wrapper">
      <h1 className="property__name">
        Beautiful &amp; luxurious studio at great location
      </h1>
      <button className="property__bookmark-button button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `80%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">4.8</span>
    </div>
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        Apartment
      </li>
      <li className="property__feature property__feature--bedrooms">
        3 Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max 4 adults
      </li>
    </ul>
    <div className="property__price">
      <b className="property__price-value">&euro;120</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  </>;
};

export default PorpertyHead;

