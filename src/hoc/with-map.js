import React, {PureComponent} from 'react';
import Map from './../components/main/map/map.js';
import PropTypes from 'prop-types';

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      return <Component
        {...this.props}
        renderMap={(activePin, currentCityLocation, pinData, cityZoom) => {
          return pinData
            ? <Map
              activePin={activePin}
              currentCityLocation={currentCityLocation}
              pinData={pinData}
              cityZoom={cityZoom}
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

  return WithMap;
};

export default withMap;
