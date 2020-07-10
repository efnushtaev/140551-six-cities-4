import React from 'react';
import TabsItem from './tabs-item/tabs-item';
import {getOffers, getCity, getCurrentCity} from '../../../redux/selectors/offer-selectors';
import {connect} from 'react-redux';
import {setCurrentCity} from '../../../redux/reducers/offers-reducer';

const TabsList = ({city, currentCity, setCurrentCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {city.map((el, i) => <li key={el + i} className="locations__item"><TabsItem currentCity={currentCity} onSetCurrentCity={setCurrentCity} title={el}/></li>)}
      </ul>
    </section>
  );
};

let mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  currentCity: getCurrentCity(state)
});

export default connect(mapStateToProps, {setCurrentCity})(TabsList);

