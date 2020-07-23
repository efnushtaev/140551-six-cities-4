import React, {PureComponent} from 'react';
import Map from './../components/main/map/map.js';
import {getCurrentCity, getPinData, getCurrentCityLocation, getCityZoom} from '../redux/selectors/offer-selectors.js';
import {ActionCreater} from '../redux/reducers/offers-reducer.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      
      const {currentCityLocation, pinData, cityZoom, currentCity, setCurrentCityLocation} = this.props;
      return <Component
        {...this.props}
        renderMap={(activePin) => {
          return pinData
            ? <Map
              currentCityLocation={currentCityLocation}
              pinData={pinData}
              cityZoom={cityZoom}
              activePin={activePin}
              currentCity={currentCity}
              setCurrentCityLocation={setCurrentCityLocation}
            />
            :null
        }
      }
      />;
    }
  }

  WithMap.propTypes = {
    cityLocation: PropTypes.array,
    hotelsLocation: PropTypes.arrayOf(PropTypes.array),
    currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
    cityZoom: PropTypes.number,
    setPinData: PropTypes.func,
    pinData: PropTypes.arrayOf(PropTypes.array)
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithMap);
};

let mapStateToProps = (state) => ({
  currentCityLocation: getCurrentCityLocation(state),
  pinData: getPinData(state),
  currentCity: getCurrentCity(state),
  cityZoom: getCityZoom(state),
});

let mapDispatchToProps = (dispatch) => ({
  setPinData(payload) {
    dispatch(ActionCreater.setPinData(payload));
  },
  setCurrentCityLocation(payload) {
    dispatch(ActionCreater.setCurrentCityLocation(payload));
  },
  setCityZoom(payload) {
    dispatch(ActionCreater.setCityZoom(payload));
  }
});

export default withMap;
