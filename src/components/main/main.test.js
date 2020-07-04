import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {describe, expect, it} from '@jest/globals';

describe(`mainTest`, () => {
  it(`Main should be rendered correct`, () => {
    const tree = renderer
      .create(<Main/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
