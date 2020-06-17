import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {describe, expect, it} from '@jest/globals';

const OFFERS_COUNT = 3;
const placeCardNames = [`first-name`, `second-name`];
const onTitleClick = jest.fn();

describe(`mainTest`, () => {
  it(`Main should be rendered correct`, () => {
    const tree = renderer
      .create(<Main
        offersCount = {OFFERS_COUNT}
        placeCardNames = {placeCardNames}
        onTitleClick = {onTitleClick}
      />);

    expect(tree).toMatchSnapshot();
  });
});
