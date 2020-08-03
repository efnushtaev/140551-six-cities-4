import { NavLink } from "react-router-dom";
import React from 'react';
import RaitingDrawer from "../../../common/raiting-drawer/raiting-drawer";

const FavoritePlacesCardList = ({city, favoriteList, setCurrentOfferId, onFavoriteStatusChange }) => {

  function handlePlaceCardOpen(id) {
    setCurrentOfferId(id)
  }

  function handleFavoriteStatusChange(id, is_favorite) {
    onFavoriteStatusChange(id, !is_favorite)
  }

  function _favoriteCurrentCityListDrawer() {
    return favoriteList.map((el) => {
      let cityName = el.city.name;
      return cityName === city
        ? <article key={el.id} className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <NavLink onClick={() => handlePlaceCardOpen(el.id)} to={`/property/${el.id}`}>
              <img className="place-card__image" src={el.preview_image} width="150" height="110" alt="Place image" />
            </NavLink>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{el.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button onClick={() => handleFavoriteStatusChange(el.id, el.is_favorite)} className={`${el.is_favorite && `place-card__bookmark-button--active `}place-card__bookmark-button button`} type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <RaitingDrawer rating={el.rating} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">{el.title}</a>
            </h2>
            <p className="place-card__type">{el.type}</p>
          </div>
        </article>
        : null;
    });
  }

  return _favoriteCurrentCityListDrawer();
};

export default FavoritePlacesCardList;
