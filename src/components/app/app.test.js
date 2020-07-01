import React from 'react';
import renderer from 'react-test-renderer';
import Main from './../main/main';
import {describe, expect, it} from '@jest/globals';
import {MemoryRouter} from 'react-router-dom';

describe(`appTest`, () => {
  it(`App should be rendered correct`, () => {
    const tree = renderer
      .create(
          <MemoryRouter
            initialEntries={[{pathname: `/`}]}
          >
            <Main/>
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();

  });
});
