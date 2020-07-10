import React from 'react';

const TabsItem = ({title, onSetCurrentCity, currentCity}) => {
  const handleSetCurrentCity = (e, title) => {
    e.preventDefault();
    onSetCurrentCity(title);
  }
  return (
    <a onClick={(e) => handleSetCurrentCity(e, title)} className={`locations__item-link tabs__item` + (currentCity === title ? ` tabs__item--active` : ``)} href="#">
      <span>{title}</span>
    </a>
  );
};

export default TabsItem;
