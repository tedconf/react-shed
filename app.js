import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Shed, { defaultTheme } from './index.js';

render(
  <ThemeProvider theme={defaultTheme}>
    <Shed
      component="header"
      c="magenta.5"
      lh="t"
      pl="2"
      mb="1"
    >
      <h1>A header component with the color "magenta" from the theme, 2 units of left-padding, and 1 unit of margin on the bottom.</h1>
    </Shed>
  </ThemeProvider>
  , document.querySelector('#app')
);
