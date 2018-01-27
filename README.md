# react-shed

react-shed is a version of [shed.css](http://tedconf.github.io/shed-css/)
created specifically with react in mind. It implements shed dynamically using
[styled components](https://styled-components.com/),
[modularscale](https://github.com/KyleAMathews/modularscale), and [color](http://ghub.io/color).

## INSTALL

in your project:
`yarn add react-shed styled-components`

in your app root:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Shed, {
  createTheme,
  reset,
} from 'react-shed';
import App from 'app';

// use `createTheme` to customize colors, typefaces, scale, etc
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
    <App />
  </ThemeProvider>,
  document.querySelector('#my-node')
);
```


## USE

now you can build components using shed.css properties:

```jsx
<Shed
  component="span"
  mx="1"
  c="red"
  d="b"
  w="1of3"
>
  margin-left and margin-right of '1' on your scale, color of red, display
  block, and width 1of3
</Shed>
```

## CAVEATS

- it hard dependency on styled-components. If there's a smaller / better / faster
  alternative, I'm open to the idea.
- `jsx` disallows hyphenated property names, so any property that has a hyphen in
  shed (`flx-g` for example), becomes the un-hyphenated version of itself
  (`flxg`). The value can remain hyphenated.
- it doesn't handle media queries. I recommend [`react-media`](https://github.com/ReactTraining/react-media).

#### THE SYNTAX IS UGLY-ISH

I get you. How about something like this?

```jsx
<div.shed
  bg="black"
>stuff</div.shed>
```

There's a `babel` transform for that!
[`babel-plugin-shed`](https://github.com/VinSpee/babel-plugin-shed) enables
this sugar. Install it with `yarn add -D babel-plugin-shed` and add it to your
babel configuration.
