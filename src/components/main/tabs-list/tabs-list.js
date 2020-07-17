import React from 'react';
import TabsItem from './tabs-item/tabs-item';
import {getOffers, getCity, getCurrentCity} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import {ActionCreater} from '../../../redux/reducers/offers-reducer';
import PropTypes from 'prop-types';
import {compose} from 'redux';

const TabsList = ({city, currentCity, onCurrentCityChange}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {city.map((el, i) =>
          <li key={el + i} className="locations__item">
            <TabsItem currentCity={currentCity} onSetCurrentCity={onCurrentCityChange} title={el}/>
          </li>)
        }
      </ul>
    </section>
  );
};

let mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  currentCity: getCurrentCity(state)
});

let mapDispatchToProps = (dispatch) => ({
  onCurrentCityChange(payload) {
    dispatch(ActionCreater.setCurrentCity(payload));
  }
});

TabsList.propTypes = {
  city: PropTypes.arrayOf(PropTypes.string),
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  onCurrentCityChange: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), React.memo)(TabsList);

