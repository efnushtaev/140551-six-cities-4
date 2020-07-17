import React from 'react';
import PlacesListCities from './../places/places-list/places-list--cities';
import TabsList from '../tabs-list/tabs-list';
import {getOffers, getCityLocation, getCityZoom, getCurrentCity, getPinData} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreater} from '../../../redux/reducers/offers-reducer';
import MainEmpty from '../main-empty/main-empty';
import {compose} from 'redux';
import withMap from '../../../hoc/with-map';
import withActivePin from '../../../hoc/with-active-pin';
import withSorting from '../../../hoc/with-sorting';

const CitiesPlaces = (props) => {
  const {
    offers,
    currentCity,
    renderMap,
    renderSortList,
    sortType,
    activePin,
    setActivePin,
    setSortType,
    setFilteredOffers,
  } = props;
  const _getPlacesCount = () => {
    return offers.length;
  };
  return (
    <div className={offers.length === 0
      ? `page__main page__main--index page__main--index-empty`
      : `page__main page__main--index`} >
      <div className="tabs">
        <TabsList />
      </div>
      {offers.length !== 0
        ? <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {_getPlacesCount()} places to stay in Amsterdam
              </b>
              {renderSortList(sortType, setSortType)}
              <PlacesListCities
                sortType={sortType}
                offers={offers}
                currentCity={currentCity}
                setActivePin={setActivePin}
                setFilteredOffers={setFilteredOffers}
              />
            </section>
            <div className="cities__right-section">
              {renderMap(activePin)}
            </div>
          </div>
        </div>
        : <MainEmpty />
      }
    </div>
  );
};

let mapStateToProps = (state) => ({
  offers: getOffers(state),
  cityLocation: getCityLocation(state),
  pinData: getPinData(state),
  cityZoom: getCityZoom(state),
  currentCity: getCurrentCity(state)
});

let mapDispatchToProps = (dispatch) => ({
  setFilteredOffers(payload) {
    dispatch(ActionCreater.setFilteredOffers(payload));
  }
});

CitiesPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired,
  pinData: PropTypes.arrayOf(PropTypes.array),
  offers: PropTypes.arrayOf(PropTypes.object),
  sortType: PropTypes.string.isRequired,
  activePin: PropTypes.number,
  setFilteredOffers: PropTypes.func,
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
