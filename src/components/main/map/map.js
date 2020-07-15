import React from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, TileLayer} from 'react-leaflet';
import L from 'leaflet';

class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      activeIcon: false
    };
  }

  componentDidMount() {
    this.props.setPinData(this.props.pinData);
  }

  shouldComponentUpdate(prevProps) {
    return this.props.activePin !== prevProps.activePin
      || this.props.currentCity !== prevProps.currentCity;
  }

  componentDidUpdate(prevProps) {
    return this.props.currentCity !== prevProps.currentCity
      && this.props.setPinData(this.props.pinData);
  }

  render() {
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

    const {cityLocation, pinData, cityZoom, activePin} = this.props;
    return <div style={{height: `100%`, width: `100%`}} className="cities__map">
      <Map style={{height: `100%`, width: `100%`}} center={cityLocation} zoom={cityZoom}>
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
  hotelsLocation: PropTypes.arrayOf(PropTypes.array).isRequired,
  cityLocation: PropTypes.array.isRequired,
  pinData: PropTypes.arrayOf(PropTypes.array),
  setPinData: PropTypes.func.isRequired,
  activePin: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default MapContainer;
