import React from 'react';
import Color from 'color';
import ms from 'modularscale';
import styled from 'styled-components';

const sizes = (scale = 'major second', number = 20) => Array.from([...Array(number)]).reduce((acc, curr, i) => ({
  ...acc,
  [`z${i}`]: `${ms((i - 1), scale)}rem`,
  z0: 0,
  [`z.${i}`]: `${(ms((0 - (i)), scale))}rem`,
}), {});

const createTheme = (
  userSizes = 'major second',
  colors = {
    black: '#000000',
    white: '#ffffff',
    cyan: 'cyan',
    magenta: 'magenta',
    yellow: 'yellow',
  },
  fonts = {
    sans: 'sans-serif',
    serif: 'serif',
    mono: 'monospace',
  },
) => {
  const generatedTheme = {};

  if (userSizes && typeof userSizes === 'string') {
    try {
      generatedTheme.sizes = sizes(userSizes);
    } catch (e) {
      throw new Error(e);
   }
  }

  if (userSizes && typeof userSizes === 'object') {
    const sizesHash = Object.keys(userSizes).reduce((acc, curr, i) => ({
      ...acc,
      [`z${curr}`]: userSizes[curr],
    }), {});
    if (!sizesHash['z0']) {
      sizesHash['z0'] = 0;
    }
    if (!sizesHash['z.0']) {
      delete sizesHash['z.0'];
    }
    generatedTheme.sizes = sizesHash;
  }

  if (fonts && typeof fonts === 'object') {
    generatedTheme.fonts = fonts;
  }

  if (fonts && typeof fonts !== 'object') {
    throw new Error(`fonts object must be provided in the format:
      {
        fontName: 'font-family css string',
      }
    `);
  }

  if (colors && typeof colors === 'object') {
    generatedTheme.colors = colors;
  }

  if (colors && typeof colors !== 'object') {
    throw new Error(`colors object must be provided in the format:
      {
        black: '#000000',
        cyan: 'cyan',
      }
    `);
  }
  return generatedTheme;
  console.log(generatedTheme);
};

const defaultTheme = createTheme();

const getPropsForMPValue = (prop, value = null, THEME = null) => {
  if (THEME.sizes === null) {
    throw new Error('can\'t generate values without theme sizes');
  }
  let formattedVal = value;
  if (value === 'a') {
    formattedVal = 'auto';
  } else {
    formattedVal = `${THEME.sizes[`z${value}`]}`;
  }
  switch (prop) {
    case 'm':
      return `margin: ${formattedVal};`;
    case 'mx':
      return (
        `margin-left: ${formattedVal};
         margin-right: ${formattedVal};`
      );
    case 'my':
      return (
        `margin-top: ${formattedVal};
         margin-bottom: ${formattedVal};`
      );
    case 'mt':
      return `margin-top: ${formattedVal};`;
    case 'mr':
      return `margin-right: ${formattedVal};`;
    case 'mb':
      return `margin-bottom: ${formattedVal};`;
    case 'ml':
      return `margin-left: ${formattedVal};`;

    case 'p':
      return `padding: ${formattedVal};`;
    case 'px':
      return (
        `padding-left: ${formattedVal};
         padding-right: ${formattedVal};`
      );
    case 'py':
      return (
        `padding-top: ${formattedVal};
         padding-bottom: ${formattedVal};`
      );
    case 'pt':
      return `padding-top: ${formattedVal};`;
    case 'pr':
      return `padding-right: ${formattedVal};`;
    case 'pb':
      return `padding-bottom: ${formattedVal};`;
    case 'pl':
      return `padding-left: ${formattedVal};`;

    default:
      return null;
  }
};

const getPropsForDValue = (prop, value = null) => {
  switch (value) {
    case 'b':
      return 'block';
    case 'i-b':
      return 'inline-block';
    case 'i':
      return 'inline';
    case 'f':
      return 'flex';
    case 'i-f':
      return 'inline-flex';
    case 't':
      return 'table';
    case 't-c':
      return 'table-cell';
    case 't-r':
      return 'table-row';
    case 'n':
      return 'none';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the display prop. One of b, i-b, i, f, i-f, t, t-c, t-r, n, init');
  }
};

const getPropsForFSValue = (value) => {
  switch (value) {
    case 'n':
      return 'normal';
    case 'i':
      return 'italic';
    case 'o':
      return 'oblique';
    case 'inh':
      return 'inherit';
    case 'init':
      return 'inherit';
    default:
      throw new Error('You must provide a valid value for the font-style prop. One of n, i, o, i, init');
  }
};

const getPropsForACValue = (prop, value = null) => {
  switch (value) {
    case 'f-s':
      return 'flex-start';
    case 'f-e':
      return 'flex-end';
    case 'c':
      return 'center';
    case 's':
      return 'stretch';
    case 's-b':
      return 'space-between';
    case 's-e':
      return 'space-evenly';
    case 's-a':
      return 'space-around';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the align-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init');
  }
};

const getPropsForJCValue = (prop, value = null) => {
  switch (value) {
    case 'f-s':
      return 'flex-start';
    case 'f-e':
      return 'flex-end';
    case 'c':
      return 'center';
    case 's-b':
      return 'space-between';
    case 's-e':
      return 'space-evenly';
    case 's-a':
      return 'space-around';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the justify-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init');
  }
};

const getPropsForAIValue = (prop, value = null) => {
  switch (value) {
    case 'f-s':
      return 'flex-start';
    case 'f-e':
      return 'flex-end';
    case 'c':
      return 'center';
    case 'b':
      return 'baseline';
    case 's':
      return 'stretch';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the align-items prop. One of f-s, f-e, c, b, s, i, init');
  }
};

const getPropsForASValue = (prop, value = null) => {
  switch (value) {
    case 'a':
      return 'auto';
    case 'f-s':
      return 'flex-start';
    case 'f-e':
      return 'flex-end';
    case 'c':
      return 'center';
    case 'b':
      return 'baseline';
    case 's':
      return 'stretch';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the align-self prop. One of a, f-s, f-e, c, b, s, i, init');
  }
};

const getPropsForFlxWValue = (prop, value = null) => {
  switch (value) {
    case 'nw':
      return 'nowrap';
    case 'w':
      return 'wrap';
    case 'wr':
      return 'wrap-reverse';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the flex-wrap prop. One of nw, w, wr, i, init');
  }
};

const getPropsForFlxDValue = (prop, value = null) => {
  switch (value) {
    case 'r':
      return 'row';
    case 'rw':
      return 'row-reverse';
    case 'c':
      return 'column';
    case 'cr':
      return 'column-reverse';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';

    default:
      throw new Error('You must provide a valid value for the flex-direction prop. One of r, rr, c, cr, i, init');
  }
};

const getPropsForFlxBValue = (value, theme) => {
  switch (value) {
    case 'a':
      return 'auto';
    case 'f':
      return 'fill';
    case 'max-c':
      return 'max-content';
    case 'min-c':
      return 'min-content';
    case 'fit-c':
      return 'fit-content';
    case 'c':
      return 'content';
    case 'i':
      return 'inherit';
    case 'init':
      return 'inherit';
    default:
      if (theme.sizes[`z${value}`]) {
        return `${theme.sizes[`z${value}`]}`;
      }
      throw new Error('You must provide a valid value for the flex-basis prop. One of [scale value], a, f, max-c, min-c, fit-c, c, i, init');
  }
};

const getPropsForFlValue = (value) => {
  switch (value) {
    case 'l':
      return 'left';
    case 'r':
      return 'right';
    case 'n':
      return 'none';
    case 'i':
      return 'inherit';
    case 'init':
      return 'inherit';
    default:
      throw new Error('You must provide a valid value for the float prop. One of l, r, n, i, init');
  }
};

const getPropsForOValue = (value) => {
  switch (value) {
    case 'a':
      return 'auto';
    case 'h':
      return 'hidden';
    case 's':
      return 'scroll';
    default:
      throw new Error('You must provide a valid value for the overflow prop. One of a, h, s');
  }
};

const getPropsForTTValue = (value) => {
  switch (value) {
    case 'u':
      return 'uppercase';
    case 'c':
      return 'capitalize';
    case 'l':
      return 'lowercase';
    case 'n':
      return 'none';
    case 'i':
      return 'inherit';
    case 'init':
      return 'inherit';
    default:
      throw new Error('You must provide a valid value for the text-transform prop. One of u, c, l, n, i, init');
  }
};

const getPropsForTAValue = (value) => {
  switch (value) {
    case 'c':
      return 'center';
    case 'l':
      return 'left';
    case 'r':
      return 'right';
    case 'j':
      return 'justify';
    default:
      throw new Error('You must provide a valid value for the text-align prop. One of c, l, r, j');
  }
};

const getPropsForVAValue = (value) => {
  switch (value) {
    case 't':
      return 'vertical-align: top;';
    case 'b':
      return 'vertical-align: bottom;';
    case 'm':
      return 'vertical-align: middle;';
    case 'bl':
      return 'vertical-align: baseline;';
    case 'c':
      return `
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the vertical-align prop. One of t, b, m, bl, c, i, init');
  }
};

const getPropsForTDValue = (value) => {
  switch (value) {
    case 'u':
      return 'underline';
    case 'o':
      return 'overline';
    case 'b':
      return 'blink';
    case 'l-t':
      return 'line-through';
    case 'n':
      return 'none';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the text-decoration prop. One of u, o, b, l-t, n, i, init');
  }
};

const getPropsForLSValue = (value) => {
  switch (value) {
    case 'n':
      return 'normal';
    case 't':
      return '-0.05em';
    case 'l':
      return '.3em';
    default:
      throw new Error('You must provide a valid value for the letter-spacing prop. One of n, t, l');
  }
};

const getPropsForLHValue = (value, theme) => {
  switch (value) {
    case 'd':
      return '1';
    case 'n':
      return 'normal';
    case 't':
      return theme.sizes['z2']
        .replace(/rem/, '')
        .replace(/em/, '');
    case 'l':
      return theme.sizes['z4']
        .replace(/rem/, '')
        .replace(/em/, '');
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      if (theme.sizes[`z${value}`]) {
        return theme.sizes[`z${value}`]
          .replace(/rem/, '')
          .replace(/em/, '');
        ;
      }
      throw new Error('You must provide a valid value for the line-height prop. One of [scale value], d, t, l, n, i, init');
  }
};

const getPropsForPosValue = (value) => {
  switch (value) {
    case 'a':
      return 'position: absolute;';
    case 'r':
      return 'position: relative;';
    case 'f':
      return 'position: fixed;'
    case 's':
      return 'position: static;'
    case 'stick':
      return 'position: sticky;';
    case 'c':
      return `
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      `;
    case 'i':
      return 'position: inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the position prop. One of a, r, s, stick, c');
  }
};

const getPropsForWSValue = (value) => {
  switch (value) {
    case 'n':
      return 'normal';
    case 'nw':
      return 'nowrap';
    case 'p':
      return 'pre';
    case 'p-w':
      return 'pre-wrap';
    case 'p-l':
      return 'pre-line';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the white-space prop. One of n, nw, p, p-w, p-l, i, init');
  }
};

const getPropsForColor = (value, theme) => {
  if (value === 'transparent') {
    return 'transparent';
  }
  const alpha = /(.+)(\.\d)/.exec(value);
  if (alpha) {
    return Color(theme.colors[`${alpha[1]}`]).alpha(alpha[2]).string();
  }
  return theme.colors[value];
}

const getMarginAndPadding = (props, theme) => {
  let newProps = '';
  if (props) {
    Object.keys(props).forEach((prop) => {
      if ([
        'm',
        'mx',
        'my',
        'mt',
        'mr',
        'mb',
        'ml',
        'p',
        'px',
        'py',
        'pt',
        'pr',
        'pb',
        'pl',
      ].indexOf(prop) > -1) {
        newProps = `
        ${newProps && `${newProps};`}
        ${getPropsForMPValue(prop, props[prop], theme)};`;
      }
    });
  }
  return newProps;
};

const getSize = (value, theme) => {
  switch (value) {
    case '1of12':
      return `${(1/12) * 100}%`
    case '1of10':
      return `${(1/10) * 100}%`
    case '1of8':
      return `${(1/8) * 100}%`
    case '1of6':
      return `${(1/6) * 100}%`
    case '2of12':
      return `${(2/12) * 100}%`
    case '1of5':
      return `${(1/5) * 100}%`
    case '1of5':
      return `${(1/5) * 100}%`
    case '2of10':
      return `${(2/10) * 100}%`
    case '1of4':
      return `${(1/4) * 100}%`
    case '2of8':
      return `${(2/8) * 100}%`
    case '3of12':
      return `${(3/12) * 100}%`
    case '3of10':
      return `${(3/10) * 100}%`
    case '1of3':
      return `${(1/3) * 100}%`
    case '2of6':
      return `${(2/6) * 100}%`
    case '4of12':
      return `${(4/12) * 100}%`
    case '3of8':
      return `${(3/8) * 100}%`
    case '2of5':
      return `${(2/5) * 100}%`
    case '4of10':
      return `${(4/10) * 100}%`
    case '5of12':
      return `${(5/12) * 100}%`
    case '1of2':
      return `${(1/2) * 100}%`
    case '2of4':
      return `${(2/4) * 100}%`
    case '3of6':
      return `${(3/6) * 100}%`
    case '4of8':
      return `${(4/8) * 100}%`
    case '5of10':
      return `${(5/10) * 100}%`
    case '6of12':
      return `${(6/12) * 100}%`
    case '7of12':
      return `${(7/12) * 100}%`
    case '3of5':
      return `${(3/5) * 100}%`
    case '6of10':
      return `${(6/10) * 100}%`
    case '5of8':
      return `${(5/8) * 100}%`
    case '2of3':
      return `${(2/3) * 100}%`
    case '4of6':
      return `${(4/6) * 100}%`
    case '8of12':
      return `${(8/12) * 100}%`
    case '7of10':
      return `${(7/10) * 100}%`
    case '3of4':
      return `${(3/4) * 100}%`
    case '6of8':
      return `${(6/8) * 100}%`
    case '9of12':
      return `${(9/12) * 100}%`
    case '4of5':
      return `${(4/5) * 100}%`
    case '8of10':
      return `${(8/10) * 100}%`
    case '9of10':
      return `${(9/10) * 100}%`
    case '11of12':
      return `${(11/12) * 100}%`

    case '1/12':
      return `${(1/12) * 100}%`
    case '1/10':
      return `${(1/10) * 100}%`
    case '1/8':
      return `${(1/8) * 100}%`
    case '1/6':
      return `${(1/6) * 100}%`
    case '2/12':
      return `${(2/12) * 100}%`
    case '1/5':
      return `${(1/5) * 100}%`
    case '1/5':
      return `${(1/5) * 100}%`
    case '2/10':
      return `${(2/10) * 100}%`
    case '1/4':
      return `${(1/4) * 100}%`
    case '2/8':
      return `${(2/8) * 100}%`
    case '3/12':
      return `${(3/12) * 100}%`
    case '3/10':
      return `${(3/10) * 100}%`
    case '1/3':
      return `${(1/3) * 100}%`
    case '2/6':
      return `${(2/6) * 100}%`
    case '4/12':
      return `${(4/12) * 100}%`
    case '3/8':
      return `${(3/8) * 100}%`
    case '2/5':
      return `${(2/5) * 100}%`
    case '4/10':
      return `${(4/10) * 100}%`
    case '5/12':
      return `${(5/12) * 100}%`
    case '1/2':
      return `${(1/2) * 100}%`
    case '2/4':
      return `${(2/4) * 100}%`
    case '3/6':
      return `${(3/6) * 100}%`
    case '4/8':
      return `${(4/8) * 100}%`
    case '5/10':
      return `${(5/10) * 100}%`
    case '6/12':
      return `${(6/12) * 100}%`
    case '7/12':
      return `${(7/12) * 100}%`
    case '3/5':
      return `${(3/5) * 100}%`
    case '6/10':
      return `${(6/10) * 100}%`
    case '5/8':
      return `${(5/8) * 100}%`
    case '2/3':
      return `${(2/3) * 100}%`
    case '4/6':
      return `${(4/6) * 100}%`
    case '8/12':
      return `${(8/12) * 100}%`
    case '7/10':
      return `${(7/10) * 100}%`
    case '3/4':
      return `${(3/4) * 100}%`
    case '6/8':
      return `${(6/8) * 100}%`
    case '9/12':
      return `${(9/12) * 100}%`
    case '4/5':
      return `${(4/5) * 100}%`
    case '8/10':
      return `${(8/10) * 100}%`
    case '9/10':
      return `${(9/10) * 100}%`
    case '11/12':
      return `${(11/12) * 100}%`
    case 'full':
      return `100%`
    default:
      if (theme.size[`z${value}`]) {
        return theme.size[`z${value}`];
      }
      throw new Error('You must provide a valid value for the size prop.');
  }
}

let componentName = 'shed';

const Shed = ({
  component = 'div',
  ...props,
}) => {
  console.log(component);
  componentName = component;
  const ShedStyled = styled(component)`
    ${({ ...props, theme }) => getMarginAndPadding(props, theme)}
    ${({ c, theme }) =>
      c
        ? `color: ${getPropsForColor(c, theme)};`
        : null
    }
    ${({ bg, theme }) =>
      bg
        ? `background-color: ${getPropsForColor(c, theme)};`
        : null
    }
    ${({ f, theme }) =>
      f
        ? `font-size: ${theme.size[`z${f}`]};`
        : null
    }
    ${({ fw }) =>
      fw
        ? `font-weight: ${fw};`
        : null
    }
    ${({ fs, theme }) =>
      fs
        ? `font-style: ${getPropsForFSValue(fs)};`
        : null
    }
    ${({ ff, theme }) =>
      ff
        ? `font-family: ${theme.fonts[`${ff}`]};`
        : null
    }
    ${({ ls, theme }) =>
      ls
        ? `letter-spacing: ${getPropsForLSValue(ls, theme)};`
        : null
    }
    ${({ lh, theme }) =>
      lh
        ? `line-height: ${getPropsForLHValue(lh, theme)};`
        : null
    }
    ${({ tt }) =>
      tt
        ? `text-transform: ${getPropsForTTValue(tt)};`
        : null
    }
    ${({ ta }) =>
      ta
        ? `text-align: ${getPropsForTAValue(ta)};`
        : null
    }
    ${({ va }) =>
      va
        ? `${getPropsForVAValue(va)}`
        : null
    }
    ${({ td }) =>
      td
        ? `text-decoration: ${getPropsForTDValue(td)};`
        : null
    }
    ${({ d }) =>
      d
        ? `display: ${getPropsForDValue(d)};`
        : null
    }
    ${({ flxg }) =>
      flxg
        ? `flex-grow: ${flxg};`
        : null
    }
    ${({ flxs }) =>
      flxs
        ? `flex-shrink: ${flxs};`
        : null
    }
    ${({ jc }) =>
      jc
        ? `justify-content: ${getPropsForJCValue(jc)};`
        : null
    }
    ${({ ac }) =>
      ac
        ? `align-content: ${getPropsForACValue(ac)};`
        : null
    }
    ${({ ai }) =>
      ai
        ? `align-items: ${getPropsForAIValue(ai)};`
        : null
    }
    ${({ as }) =>
      as
        ? `align-self: ${getPropsForASValue(as)};`
        : null
    }
    ${({ flxw }) =>
      flxw
        ? `flex-wrap: ${getPropsForFlxWValue(flxw)};`
        : null
    }
    ${({ flxd }) =>
      flxd
        ? `flex-direction: ${getPropsForFlxDValue(flxd)};`
        : null
    }
    ${({ flxb, theme }) =>
      flxb
        ? `flex-basis: ${getPropsForFlxBValue(flxb, theme)};`
        : null
    }
    ${({ fl }) =>
      fl
        ? `float: ${getPropsForFlValue(fl)};`
        : null
    }
    ${({ pos }) => 
      pos
        ? `position: ${getPropsForPosValue(pos)};`
        : null
    }
    ${({ top, theme }) =>
      top
        ? `top: ${theme.size[`z${top}`]};`
        : null
    }
    ${({ right, theme }) =>
      right
        ? `right: ${theme.size[`z${right}`]};`
        : null
    }
    ${({ bottom, theme }) =>
      bottom
        ? `bottom: ${theme.size[`z${bottom}`]};`
        : null
    }
    ${({ left, theme }) =>
      left
        ? `left: ${theme.size[`z${left}`]};`
        : null
    }
    ${({ o, theme }) =>
      o
        ? `overflow: ${getPropsForOValue(o)};`
        : null
    }
    ${({ ox, theme }) =>
      ox
        ? `overflow-x: ${getPropsForOValue(ox)};`
        : null
    }
    ${({ oy, theme }) =>
      oy
        ? `overflow-y: ${getPropsForOValue(oy)};`
        : null
    }
    ${({ zi, theme }) =>
      zi
        ? `z-index: ${zi};`
        : null
    }
    ${({ ws }) =>
      ws
        ? `white-space: ${getPropsForWSValue(ws)};`
        : null
    }
    ${({ w, theme }) =>
      w
      ? `width: ${getSize(w, theme)};`
      : null
    }
    ${({ mw, theme }) =>
      mw
      ?  `max-width: ${getSize(w, theme)};`
      : null
    }
    ${({ h, theme }) =>
      h
      ? `height: ${getSize(h, theme)};`
      : null
    }
  `;

  return <ShedStyled {...props} />;
};

export default Shed;
export {
  defaultTheme,
  createTheme,
};