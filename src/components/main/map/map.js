import React from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: [52.38333, 4.9],
      zoom: 12,
      offerCords: [
        [52.3709553943508, 4.89309666406198],
        [52.3909553943508, 4.929309666406198]
      ]
    };
    this.map = null;
  }

  render() {
    const {city, zoom, offerCords} = this.state;
    return <div className="cities__map">
      <Map style={{height: `100%`, width: `100%`}} center={city} zoom={zoom}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />
        {offerCords.map((e) => {
          return <Marker key={e} position={e}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>;
        })}
      </Map>
    </div>;
  }
}

Map.propTypes = {
  city: PropTypes.array,
  zoom: PropTypes.number,
  offerCords: PropTypes.arrayOf(PropTypes.array),
};

export default MapContainer;
