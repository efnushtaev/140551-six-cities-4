import React from 'react';
import TabsItem from './tabs-item/tabs-item';

const mock = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const TabsList = () => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {mock.map((el, i) => <li key={el + i} className="locations__item"><TabsItem title={el}/></li>)}
      </ul>
    </section>
  );
};

export default TabsList;
