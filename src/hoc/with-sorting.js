import React, {PureComponent} from 'react';
import {SortType} from '../constants/const';

const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        sortType: SortType.popular,
        isOpened: false
      };
      this._handleChangeSortType = this._handleChangeSortType.bind(this);
      this._handleOpenList = this._handleOpenList.bind(this);
    }

    _handleOpenList() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }

    _handleChangeSortType(e) {
      this._setSortType(e.currentTarget.id);
      this._handleOpenList();
    }

    _setSortType(type) {
      this.setState({sortType: type});
    }

    render() {
      const {sortType} = this.state;

      return <Component
        {...this.props}
        sortType={sortType}
        renderSortList={() => {
          return <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span onClick={this._handleOpenList} className="places__sorting-type" tabIndex="0">
              {sortType}
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className={`places__options places__options--custom` + (this.state.isOpened ? ` places__options--opened` : ``)}>
              <li onClick={this._handleChangeSortType} id={SortType.popular} className="places__option places__option--active" tabIndex="0">Popular</li>
              <li onClick={this._handleChangeSortType} id={SortType.priceLowToHigh} className="places__option" tabIndex="0">Price: low to high</li>
              <li onClick={this._handleChangeSortType} id={SortType.priceHighToLow} className="places__option" tabIndex="0">Price: high to low</li>
              <li onClick={this._handleChangeSortType} id={SortType.topRatedFirst} className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>;
        }}
      />;
    }
  }

  WithSorting.propTypes = {};

  return WithSorting;
};

export default withSorting;
