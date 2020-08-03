import React from 'react';
import RaitingDrawer from '../../../common/raiting-drawer/raiting-drawer';

const PorpertyHead = (props) => {
  const {onFavoriteButtonClick, isAuth, is_favorite, is_premium, title, rating, type, bedrooms, max_adults, price, id} = props;
  const handleFavoriteStatusChange = () => {
    onFavoriteButtonClick(id, !is_favorite)
  }

  return <>
    {is_premium && <div className="property__mark">
      <span>Premium</span>
    </div>}
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
      {isAuth
        ? <button onClick={handleFavoriteStatusChange} className={`property__bookmark-button button`} type="button">
          <svg style={is_favorite ? {fill: `#4481c3`, stroke: `#4481c3`} : {}} className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
        : null
      }
    </div>
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <RaitingDrawer rating={rating} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {max_adults} adults
      </li>
    </ul>
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  </>;
};

export default PorpertyHead;

