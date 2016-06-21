import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as clickerReducers from '../../redux/reducers';

import { Provider } from 'react-redux';

import * as testing from '../../lib/testing';

import Clicker from './index';

describe ("<Clicker/>", () => {
  let clickStore;
  beforeEach (() => {
    clickStore = testing.storeFrom(clickerReducers.clicker);
  });

  const renderShallow = () => {
    return shallow(<Provider store={clickStore}><Clicker/></Provider>);
  }

  it("Can render", () => {
    const wrapper = renderShallow();
    wrapper.find(Clicker).length.should.equal(1);
  });
});
