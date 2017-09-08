/* global React, shallow, render, mount */

import React from 'react';
import {
  shallow,
  render,
  mount,
} from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;

// Skip createElement warnings but fail tests on any other warning
// (https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f#.esmfdcex1)
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};
