import React from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, TileLayer} from 'react-leaflet';
import L from 'leaflet';

const myIcon = new L.Icon({
  iconUrl: `img/pin.svg`,
  iconSize: null,
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const myIconActive = new L.Icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: null,
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(prevProps) {
    return this.props.activePin !== prevProps.activePin
      || this.props.currentCityLocation !== prevProps.currentCityLocation;
  }

  render() {
    const {currentCityLocation, pinData, cityZoom, activePin} = this.props;
    return <div style={{height: `100%`, width: `100%`}} className="cities__map">
      <Map style={{height: `100%`, width: `100%`}} center={currentCityLocation} zoom={cityZoom}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />
        {pinData.map((e, i) => {
          return <Marker key={e.id + i} icon={activePin === e.id ? myIconActive : myIcon} position={e.locationPair}/>;
        })}
      </Map>
    </div>;
  }
}

MapContainer.propTypes = {
  cityZoom: PropTypes.number,
  cityLocation: PropTypes.array,
  pinData: PropTypes.arrayOf(PropTypes.array),
  setPinData: PropTypes.func,
  activePin: PropTypes.number,
  currentCity: PropTypes.string
};

export default MapContainer;
