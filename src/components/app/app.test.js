import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {describe, expect, it} from '@jest/globals';

const OFFERS_COUNT = 3;
const placeCardNames = [`first-name`, `second-name`];
const onTitleClick = jest.fn();


describe(`appTest`, () => {
  it(`App should be rendered correct`, () => {
    const tree = renderer
      .create(<App
        offersCount={OFFERS_COUNT}
        placeCardNames={placeCardNames}
        onTitleClick={onTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();

  });
});
