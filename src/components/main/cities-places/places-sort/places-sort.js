import React from 'react';
import { SortType } from '../../../../constants/const';

class PlacesSort extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.handleChangeSortType = this.handleChangeSortType.bind(this);
    this.handleOpenList = this.handleOpenList.bind(this);
  }

  handleOpenList() {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened
    }))
  }

  handleChangeSortType(e) {
    this.props.onChangeSortType(e.currentTarget.id);
    this.handleOpenList();
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this.handleOpenList} className="places__sorting-type" tabIndex="0">
          {this.props.sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom` + (this.state.isOpened ? ` places__options--opened` : ``)}>
          <li onClick={this.handleChangeSortType} id={SortType.popular} className="places__option places__option--active" tabIndex="0">Popular</li>
          <li onClick={this.handleChangeSortType} id={SortType.priceLowToHigh} className="places__option" tabIndex="0">Price: low to high</li>
          <li onClick={this.handleChangeSortType} id={SortType.priceHighToLow} className="places__option" tabIndex="0">Price: high to low</li>
          <li onClick={this.handleChangeSortType} id={SortType.topRatedFirst} className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
};

export default PlacesSort;
