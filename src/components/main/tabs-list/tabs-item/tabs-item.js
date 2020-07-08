import React from 'react';

const TabsItem = ({title}) => {
  return (
    <a className="locations__item-link tabs__item" href="#">
      <span>{title}</span>
    </a>
  )
};

export default TabsItem;
