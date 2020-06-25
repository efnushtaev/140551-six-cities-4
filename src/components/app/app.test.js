import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {describe, expect, it} from '@jest/globals';

describe(`appTest`, () => {
  it(`App should be rendered correct`, () => {
    const tree = renderer
      .create(<App/>)
      .toJSON();

    expect(tree).toMatchSnapshot();

  });
});
