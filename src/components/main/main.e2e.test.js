import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {describe, expect, it} from '@jest/globals';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`mainTest`, () => {
  it(`Title should be pressed`, () => {
    const placeCardNames = [`first-name`, `second-name`];
    const onTitleClick = jest.fn();

    const mainPage = shallow(
        <Main
          offersCount={3}
          placeCardNames={placeCardNames}
          onTitleClick= {onTitleClick}
        />
    );

    const titleButton = mainPage.find(`button.title`);
    titleButton.simulate(`click`);

    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });
});
