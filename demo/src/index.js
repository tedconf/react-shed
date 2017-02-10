import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Shed, {
  createTheme,
} from '../../src';

const TED_THEME = createTheme(
  'minor third',
  {
    black: '#111111',
    'gray-dd': '#333333',
    'gray-d': '#666666',
    gray: '#999999',
    'gray-l': '#CCCCCC',
    'gray-ll': '#F6F6F6',
    'white': '#FFFFFF',
    'red': '#E9280B',
  },
  {
    sans: '"Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
);

render(
  <ThemeProvider theme={TED_THEME}>
    <header.shed
      c="red"
      ff="sans"
      lh="t"
      pl="2"
      mb="1"
      ls="t"
    >
      <h1>
        A header component with the theme color "red", 2 units of left-padding,
        and 1 unit of margin on the bottom with a tight line-height and tight
        letter-spacing.
      </h1>
    </header.shed>
  </ThemeProvider>
  , document.querySelector('#demo')
);
