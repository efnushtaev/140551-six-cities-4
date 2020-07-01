import React from 'react';
import PlacesList from './places-list';
import renderer from 'react-test-renderer';
import {expect, it} from '@jest/globals';

const mock = [{
  id: 1,
  srcLink: `#`,
  picture: `img/apartment-01.jpg`,
  info: {
    price: 120,
    raiting: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`
  }
},
{
  id: 1,
  srcLink: `#`,
  picture: `img/apartment-01.jpg`,
  info: {
    price: 120,
    raiting: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`
  }
}];

it(`PlaceCard renders correctly`, () => {
  const handlePlaceCardMouseOver = jest.fn();
  const tree = renderer
      .create(<PlacesList
        mock={mock}
        onPlaceCardMouseOver={handlePlaceCardMouseOver}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
