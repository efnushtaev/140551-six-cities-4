import React from 'react';
import PropTypes from 'prop-types';

const TabsItem = ({title, onSetCurrentCity, currentCity}) => {
  const handleCurrentCityChange = (e) => {
    e.preventDefault();
    onSetCurrentCity(title);
  };

  return (
    <a onClick={(e) => handleCurrentCityChange(e)} className={`locations__item-link tabs__item` + (currentCity === title ? ` tabs__item--active` : ``)} href="#">
      <span>{title}</span>
    </a>
  );
};

TabsItem.propTypes = {
  title: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onSetCurrentCity: PropTypes.func.isRequired,
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired
};

export default TabsItem;
