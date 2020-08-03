import React from 'react';
import PlacesListCities from './../places/places-list/places-list--cities';
import TabsList from '../tabs-list/tabs-list';
import {getOffers, getFilteredOffers, getCurrentCity, getCurrentCityLocation, getPinData, getCityZoom} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreaterOffers} from '../../../redux/reducers/offers-reducer';
import {OperationFavorite} from '../../../redux/reducers/favorite-reducer';
import MainEmpty from '../main-empty/main-empty';
import {compose} from 'redux';
import withMap from '../../../hoc/with-map';
import withActivePin from '../../../hoc/with-active-pin';
import withSorting from '../../../hoc/with-sorting';

const CitiesPlaces = (props) => {
  const {
    offers, renderMap, renderSortList, sortType, activePin,
    setActivePin, filteredOffers, currentCity, setCurrentCityData,
    setCurrentOfferId, postFavorite, currentCityLocation, pinData, cityZoom
  } = props;

  React.useEffect(() => {
    if (offers) {
      setCurrentCityData(offers);
    }
  }, [currentCity, offers]);

  React.useEffect(() => {
    if (offers) {
      setCurrentCityData(offers);
    }
  }, [currentCity, offers]);

  const _getPlacesCount = () => {
    return filteredOffers.length;
  };

  return (
    <div className={filteredOffers === null
      ? `page__main page__main--index page__main--index-empty`
      : `page__main page__main--index`} >
      <div className="tabs">
        <TabsList />
      </div>
      {filteredOffers !== null
        ? <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {_getPlacesCount()} places to stay in {currentCity}
              </b>
              {renderSortList()}
              <PlacesListCities
                filteredOffers={filteredOffers}
                sortType={sortType}
                onActivePinHover={setActivePin}
                onPlaceCardClick={setCurrentOfferId}
                onFavoriteStatusChange={postFavorite}
              />
            </section>
            <div className="cities__right-section">
              {renderMap(activePin, currentCityLocation, pinData, cityZoom)}
            </div>
          </div>
        </div>
        : <MainEmpty/>
      }
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    currentCity: getCurrentCity(state),
    filteredOffers: getFilteredOffers(state),
    offers: getOffers(state),
    currentCityLocation: getCurrentCityLocation(state),
    pinData: getPinData(state),
    cityZoom: getCityZoom(state),
  }
};

let mapDispatchToProps = (dispatch) => ({
  setOffers(payload) {
    dispatch(ActionCreaterOffers.setOffers(payload));
  },
  setCurrentCity(payload) {
    dispatch(ActionCreaterOffers.setCurrentCityData(payload));
  },
  setCurrentCityData() {
    dispatch(ActionCreaterOffers.setCurrentCityData());
  },
  setCurrentOfferId(payload) {
    dispatch(ActionCreaterOffers.setCurrentOfferId(payload));
  },
  postFavorite(offerId, status) {
    dispatch(OperationFavorite.postFavorite(offerId, status));
  }
});

CitiesPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired,
  pinData: PropTypes.arrayOf(PropTypes.array),
  offers: PropTypes.arrayOf(PropTypes.object),
  sortType: PropTypes.string.isRequired,
  activePin: PropTypes.number,
  setCurrentCityData: PropTypes.func,
  setPinData: PropTypes.func,
  setActivePin: PropTypes.func,
  setSortType: PropTypes.func,
  renderMap: PropTypes.func,
  renderSortList: PropTypes.func,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMap,
    withSorting,
    withActivePin,
    React.memo)(CitiesPlaces);
