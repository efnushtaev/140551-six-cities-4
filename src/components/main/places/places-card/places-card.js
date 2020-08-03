/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import RaitingDrawer from '../../../common/raiting-drawer/raiting-drawer';

const PlacesCard = ({offer, onFavoriteStatusChange, isAuth}) => {
  const {preview_image, price, rating, title, type, id,
    is_favorite, is_premium, } = offer;

  const handleFavoriteStatusChange = () => {
    onFavoriteStatusChange(id, !is_favorite)
  }

  return <>
    {is_premium
      && <div className="place-card__mark">
        <span>Premium</span>
      </div>
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <NavLink to={`/property/${id}`}>
        <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image"/>
      </NavLink>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        {isAuth
          ? <button onClick={handleFavoriteStatusChange} className={`${is_favorite ? `place-card__bookmark-button--active ` : ``}place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
          : null
        }
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <RaitingDrawer rating={rating} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </>
};

PlacesCard.propTypes = {
  offer: PropTypes.shape({
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })
};

export default React.memo(PlacesCard);
