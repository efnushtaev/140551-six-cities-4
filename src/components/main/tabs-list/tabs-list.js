import React from 'react';
import TabsItem from './tabs-item/tabs-item';
import {getCitysList, getCurrentCity} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import {ActionCreater} from '../../../redux/reducers/offers-reducer';
import PropTypes from 'prop-types';
import {compose} from 'redux';

const TabsList = ({cityList, currentCity, setCurrentCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map((el, i) =>
          <li key={el + i} className="locations__item">
            <TabsItem currentCity={currentCity} setCurrentCity={setCurrentCity} title={el}/>
          </li>)
        }
      </ul>
    </section>
  );
};

let mapStateToProps = (state) => ({
  cityList: getCitysList(state),
  currentCity: getCurrentCity(state)
});

let mapDispatchToProps = (dispatch) => ({
  setCurrentCity(payload) {
    dispatch(ActionCreater.setCurrentCity(payload));
  }
});

TabsList.propTypes = {
  cityList: PropTypes.arrayOf(PropTypes.string),
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  setCurrentCity: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), React.memo)(TabsList);

