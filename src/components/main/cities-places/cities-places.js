import React from 'react';
import PlacesListCities from './../places/places-list/places-list--cities';
import Map from './../map/map';
import TabsList from '../tabs-list/tabs-list';
import PlacesSort from './places-sort/places-sort';
import {getOffers, getCityLocation, getCityZoom, getCurrentCity, getPinData} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import {SortType} from '../../../constants/const';
import PropTypes from 'prop-types';
import {ActionCreater} from '../../../redux/reducers/offers-reducer';

class CitiesPlaces extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortType: SortType.popular,
      activePin: null
    };
    this.setSortType = this.setSortType.bind(this);
    this.setActivePin = this.setActivePin.bind(this);
  }

  setSortType(type) {
    this.setState({sortType: type});
  }

  setActivePin(id) {
    this.setState({activePin: id});
  }

  _getPlacesCount(offers) {
    return offers.length;
  }

  render() {
    const {
      offers,
      cityLocation,
      pinData,
      cityZoom,
      currentCity,
      setFilteredOffers,
      setPinData
    } = this.props;

    return <div className='page__main page__main--index'>
      <div className="tabs">
        <TabsList />
      </div>
      {offers.length !== 0
        ? <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers ? this._getPlacesCount(offers) : `0`} places to stay in Amsterdam</b>
              <PlacesSort
                onChangeSortType={this.setSortType}
                sortType={this.state.sortType}
              />
              <PlacesListCities
                sortType={this.state.sortType}
                offers={offers}
                currentCity={currentCity}
                setActivePin={this.setActivePin}
                setFilteredOffers={setFilteredOffers}
              />
            </section>
            <div className="cities__right-section">
              <Map
                cityLocation={cityLocation}
                pinData={pinData}
                cityZoom={cityZoom}
                activePin={this.state.activePin}
                currentCity={currentCity}
                setPinData={setPinData}
              />
            </div>
          </div>
        </div>
        : <div>null</div>
      }
    </div>;
  }
}

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
  },
  setPinData(payload) {
    dispatch(ActionCreater.setPinData(payload));
  }
});

CitiesPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  cityLocation: PropTypes.array,
  hotelsLocation: PropTypes.arrayOf(PropTypes.array),
  cityZoom: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPlaces);
