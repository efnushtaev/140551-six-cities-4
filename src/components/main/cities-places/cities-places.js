import React from 'react';
import PlacesListCities from './../places/places-list/places-list--cities';
import Map from './../map/map';
import TabsList from '../tabs-list/tabs-list';
import PlacesSort from './places-sort/places-sort';
import {getOffers} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import {SortType} from '../../../constants/const';
import PropTypes from 'prop-types';

class CitiesPlaces extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortType: SortType.popular
    };
    this._setSortType = this.setSortType.bind(this);
  }

  setSortType(type) {
    this.setState({sortType: type});
  }

  render() {
    return <div className='page__main page__main--index'>
      <div className="tabs">
        <TabsList />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <PlacesSort
              onChangeSortType={this.setSortType}
              sortType={this.state.sortType}
            />
            <PlacesListCities
              sortType={this.state.sortType}
              offers={this.props.offers}
              onPlaceCardMouseOver={() => {}}
            />
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </div>;
  }
}

let mapStateToProps = (state) => ({
  offers: getOffers(state)
});

CitiesPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, {})(CitiesPlaces);
