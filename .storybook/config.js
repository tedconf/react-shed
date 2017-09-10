import React from 'react';
import Shed, { createTheme } from 'react-shed';
import {
  configure,
  addDecorator,
} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'glamorous';
// import 'components/reset/index.css';
import pkg from '../package.json';

const THEME = {
  sizes: 'minor third',
  steps: 31,
  colors: {
    black: '#111111',
    'gray-dd': '#333333',
    'gray-d': '#666666',
    gray: '#999999',
    'gray-l': '#CCCCCC',
    'gray-ll': '#F6F6F6',
    white: '#FFFFFF',
    red: '#E62B1E',
    orange: '#FFAC00',
    blue: '#0E1666',
  },
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    code: 'Consolas,monaco,monospace',
  },
};


setOptions({
  name: pkg.name,
  url: pkg.repository,
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

const theme = createTheme(THEME);

const themed = (storyFn) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

addDecorator(themed);

const req = require.context('../src/stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
