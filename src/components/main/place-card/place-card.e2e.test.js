import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import {expect, it} from '@jest/globals';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  srcLink: `#`,
  picture: `img/apartment-01.jpg`,
  info: {
    price: 120,
    raiting: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`
  }
};

it(`Mouse over event`, () => {
  const handlePlaceCardMouseOver = jest.fn();
  const tree = shallow(<PlaceCard
    mock={mock}
    onPlaceCardMouseOver={handlePlaceCardMouseOver}/>
  );

  tree.find(`article`).simulate(`mouseover`);
  expect(handlePlaceCardMouseOver).toBeCalledTimes(1);
});
