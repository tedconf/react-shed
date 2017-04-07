import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Shed, {
  createTheme,
  reset,
} from '../../src';

const TED_THEME = createTheme({
  sizes: 'minor third',
  colors: {
    black: '#111111',
    'gray-dd': '#333333',
    'gray-d': '#666666',
    gray: '#999999',
    'gray-l': '#CCCCCC',
    'gray-ll': '#F6F6F6',
    'white': '#FFFFFF',
    'red': '#E9280B',
  },
  fonts: {
    sans: '"Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
});

render(
  <ThemeProvider theme={TED_THEME}>
    <div.shed
      pos="a"
    >
      <h1.shed
        f="1"
      >
        A header component with the theme color "red", 2 units of left-padding,
        and 1 unit of margin on the bottom with a tight line-height and tight
        letter-spacing.
      </h1.shed>
    </div.shed>
  </ThemeProvider>
  , document.querySelector('#demo')
);
