import React from 'react';
import PropertyGallery from './property-gallery/property-gallery';
import PropertyInside from './property-inside/property-inside';
import PropertyHost from './property-host/property-host';
import PropertyReviews from './property-reviews/property-reviews';
import PorpertyHead from './property-head/property-head';
import Map from './../map/map';
import PlacesListNear from '../places/places-list/places-list--near';
import mock from '../../../mock/offers';
import {getCurrentOffer, getCurrentOfferId} from './../../../redux/selectors/property-selectors';
import {connect} from 'react-redux';
import {getAuthStatus, getUserAvatar} from '../../../redux/selectors/auth-selectors';
import {getComments} from '../../../redux/selectors/property-selectors';
import {OperationProperty} from '../../../redux/reducers/property-reducer';

const PropertyPage = ({offer, isAuth, userAvatar, offerId, loadingComment, postComment, comments}) => {
  const {
    is_premium, title, rating,
    type, bedrooms, max_adults, price,
    images, goods, host, description
  } = offer;
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery images={images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <PorpertyHead 
              is_premium={is_premium}
              title={title}
              rating={rating}
              type={type}
              bedrooms={bedrooms}
              max_adults={max_adults}
              price={price} />
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
          {/* <Map/> */}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {/* <PlacesListNear mock={mock} onPlaceCardMouseOver={() => {}} /> */}
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
  comments: getComments(state)
})

let mapDispatchToProps = (dispatch) => ({
  loadingComment(payload) {
    dispatch(OperationProperty.loadingComment(payload))
  },
  postComment(text, rating, offerId) {
    dispatch(OperationProperty.postComment(text, rating, offerId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
