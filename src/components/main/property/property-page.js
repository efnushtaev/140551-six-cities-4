import React from 'react';
import PropertyGallery from './property-gallery/property-gallery';
import PropertyInside from './property-inside/property-inside';
import PropertyHost from './property-host/property-host';
import PropertyReviews from './property-reviews/property-reviews';
import PorpertyHead from './property-head/property-head';
import Map from './../map/map';
import PlacesListNear from '../places/places-list/places-list--near';
import mock from '../../../mock/offers';
import {getCurrentOffer, getCurrentOfferId, getNearby} from './../../../redux/selectors/property-selectors';
import {connect} from 'react-redux';
import {getAuthStatus, getUserAvatar} from '../../../redux/selectors/auth-selectors';
import {getComments} from '../../../redux/selectors/property-selectors';
import {OperationProperty} from '../../../redux/reducers/property-reducer';
import { compose } from 'redux';
import { ActionCreaterOffers } from '../../../redux/reducers/offers-reducer';
import { OperationFavorite } from '../../../redux/reducers/favorite-reducer';
import { getFavoriteList } from '../../../redux/selectors/favorite-selectors';
import { getCurrentCityLocationNearby, getPinDataNearby, getCityZoomNearby } from '../../../redux/selectors/property-selectors';
import withMap from '../../../hoc/with-map';
import withActivePin from '../../../hoc/with-active-pin';

const PropertyPage = ({offer, isAuth, userAvatar, offerId, 
  loadingComment, postComment, comments, nearbyOffers, loadingNearbyOffers, 
  setCurrentOfferId, postFavorite, renderMap, currentCityLocation,
  pinData, cityZoom, activePin, setActivePin}) => {
  const {
    is_premium, is_favorite, title, rating,
    type, bedrooms, max_adults, price,
    images, goods, host, description, id
  } = offer;
  React.useEffect(() => {
    loadingNearbyOffers(offerId);
  }, []);

  React.useEffect(() => {
    loadingNearbyOffers(offerId);
  }, [offerId]);

  return (
    <main className="page__main page__main--property">

      <section className="property">
        <PropertyGallery images={images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <PorpertyHead
            isAuth={isAuth}
              id={id}
              is_favorite={is_favorite}
              is_premium={is_premium}
              title={title}
              rating={rating}
              type={type}
              bedrooms={bedrooms}
              max_adults={max_adults}
              price={price}
              onFavoriteButtonClick={postFavorite} />
            <PropertyInside goods={goods}/>
            <PropertyHost host={host} description={description} />
            <PropertyReviews
              isAuth={isAuth}
              userAvatar={userAvatar}
              comments={comments}
              offerId={offerId}
              loadingComment={loadingComment}
              postComment={postComment} />
          </div>
        </div>
        <section className="property__map map">
          {renderMap(activePin, currentCityLocation, pinData, cityZoom)}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {nearbyOffers
            ? <PlacesListNear
              filteredOffers={nearbyOffers}
              onPlaceCardClick={setCurrentOfferId}
              onFavoriteStatusChange={postFavorite}
              onActivePinHover={setActivePin}
            />
            : null }
        </section>
      </div>
    </main>
  );
};

let mapStateToProps = (state) => ({
  offer: getCurrentOffer(state),
  isAuth: getAuthStatus(state),
  userAvatar: getUserAvatar(state),
  offerId: getCurrentOfferId(state),
  comments: getComments(state),
  nearbyOffers: getNearby(state),
  favoriteList: getFavoriteList(state),
  currentCityLocation: getCurrentCityLocationNearby(state),
  pinData: getPinDataNearby(state),
  cityZoom: getCityZoomNearby(state),
})

let mapDispatchToProps = (dispatch) => ({
  loadingComment(payload) {
    dispatch(OperationProperty.loadingComment(payload))
  },
  postComment(text, rating, offerId) {
    dispatch(OperationProperty.postComment(text, rating, offerId))
  },
  loadingNearbyOffers(offerId) {
    dispatch(OperationProperty.loadingNearbyOffers(offerId))
  },
  setCurrentOfferId(payload) {
    dispatch(ActionCreaterOffers.setCurrentOfferId(payload));
  },
  postFavorite(offerId, status) {
    dispatch(OperationFavorite.postFavorite(offerId, status));
  }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMap,
    withActivePin,
    React.memo)(PropertyPage);
