import React from 'react';
import PropTypes from 'prop-types';
import PlacesCard from '../places-card/places-card';
import {SortType} from '../../../../constants/const';

class PlacesList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(prevProps) {
    return this.props.currentCity !== prevProps.currentCity 
    || this.props.sortType !== prevProps.sortType
    || this.props.filteredOffers !== prevProps.filteredOffers;
  }

  _getSortedOffers(filteredOffers, sortType) {
    switch (sortType) {
      case SortType.priceLowToHigh:
        return filteredOffers.sort((a, b) => {
          return a.price - b.price;
        });
      case SortType.priceHighToLow:
        return filteredOffers.sort((a, b) => {
          return b.price - a.price;
        });
      case SortType.topRatedFirst:
        return filteredOffers.sort((a, b) => {
          return b.rating - a.rating;
        });
      case SortType.popular:
        return filteredOffers.sort((a, b) => {
          return a.id - b.id;
        });
      default: return filteredOffers;
    }
  }

  render() {
    return <div className={`${this.props.className.classNameDiv} places__list tabs__content`}>
      {this._getSortedOffers(this.props.filteredOffers, this.props.sortType).map((e) => {
        return <article key={e.id}
          onMouseOver={() => {
            this.props.onActivePinHover(e.id);
          }}
          onMouseLeave={() => {
            this.props.onActivePinHover(null);
          }}
          onClick={() => {
            this.props.onPlaceCardClick(e.id)
          }}
          className={`${this.props.className.classNameArticle} place-card`}>
          <PlacesCard
            offer={e}
            key={e.id}/>
        </article>;
      })}
    </div>;
  }
}

// PlacesList.propTypes = {
//   onActivePinHover: PropTypes.func.isRequired,
//   currentCity: PropTypes.string.isRequired,
//   sortType: PropTypes.string.isRequired,
//   className: PropTypes.object,
//   onPlaceCardMouseOver: PropTypes.func.isRequired,
//   offers: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     srcLink: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     info: PropTypes.shape({
//       price: PropTypes.number.isRequired,
//       raiting: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//     })
//   }))
// };

export default PlacesList;
