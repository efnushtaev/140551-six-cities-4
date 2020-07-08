/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const PlacesCard = ({mock, onPlaceCardMouseOver}) => {
  const {id, srcLink, picture, info: {price, raiting, name, type}} = mock;

  const calculateRaiting = (r) => {
    return 20 * r;
  };

  return <>
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href={srcLink}>
        <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${calculateRaiting(raiting)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
</>
};

PlacesCard.propTypes = {
  onPlaceCardMouseOver: PropTypes.func.isRequired,
  mock: PropTypes.shape({
    id: PropTypes.number.isRequired,
    srcLink: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    info: PropTypes.shape({
      price: PropTypes.number.isRequired,
      raiting: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  })
};

export default PlacesCard;
