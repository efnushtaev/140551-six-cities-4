import React from 'react';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: [52.38333, 4.9],
      zoom: 12,
      offerCords: [52.3709553943508, 4.89309666406198]
    };
  }

  _initLeaflet(city, zoom) {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    this._leafletMapStyling(map);
    this._mapIconRender(map, this.state.offerCords);
  }

  _leafletMapStyling(map) {
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
  }

  _mapIconRender(map, offerCords) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    leaflet
      .marker(offerCords, {icon})
      .addTo(map);
  }

  componentDidMount() {
    this._initLeaflet(this.state.city, this.state.zoom);
  }

  render() {
    return <div className="cities__map" id="map"></div>;
  }
}

export default Map;
