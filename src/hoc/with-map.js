import React, {PureComponent} from 'react';
import Map from './../components/main/map/map.js';
import {getCityLocation, getPinData, getCurrentCity, getCityZoom} from '../redux/selectors/offer-selectors.js';
import {ActionCreater} from '../redux/reducers/offers-reducer.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const {cityLocation, pinData, cityZoom, currentCity, setPinData} = this.props;
      return <Component
        {...this.props}
        renderMap={(activePin) => {
          return (
            <Map
              cityLocation={cityLocation}
              pinData={pinData}
              cityZoom={cityZoom}
              activePin={activePin}
              currentCity={currentCity}
              setPinData={setPinData}
            />
          );
        }}
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
  cityLocation: getCityLocation(state),
  pinData: getPinData(state),
  currentCity: getCurrentCity(state),
  cityZoom: getCityZoom(state),
});

let mapDispatchToProps = (dispatch) => ({
  setPinData(payload) {
    dispatch(ActionCreater.setPinData(payload));
  }
});

export default withMap;
