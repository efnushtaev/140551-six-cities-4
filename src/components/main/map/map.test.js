import React from 'react';
import MapContainer from './map';
import renderer from 'react-test-renderer';
import {expect, it} from '@jest/globals';


it(`Map should be rendered correct`, () => {
  const tree = renderer
    .create(<MapContainer/>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
