import _taggedTemplateLiteralLoose from 'babel-runtime/helpers/taggedTemplateLiteralLoose';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _typeof from 'babel-runtime/helpers/typeof';
import _extends from 'babel-runtime/helpers/extends';

var _templateObject = _taggedTemplateLiteralLoose(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

import React from 'react';
import Color from 'color';
import ms from 'modularscale';
import styled from 'styled-components';

var sizes = function sizes() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'major second';
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return Array.from([].concat(Array(number))).reduce(function (acc, curr, i) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2['z' + i] = ms(i - 1, scale) + 'rem', _extends2.z0 = 0, _extends2['z.' + i] = ms(0 - i, scale) + 'rem', _extends2));
  }, {});
};

var createTheme = function createTheme() {
  var userSizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'major second';
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    black: '#000000',
    white: '#ffffff',
    cyan: 'cyan',
    magenta: 'magenta',
    yellow: 'yellow'
  };
  var fonts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    sans: 'sans-serif',
    serif: 'serif',
    mono: 'monospace'
  };

  var generatedTheme = {};

  if (userSizes && typeof userSizes === 'string') {
    try {
      generatedTheme.sizes = sizes(userSizes);
    } catch (e) {
      throw new Error(e);
    }
  }

  if (userSizes && (typeof userSizes === 'undefined' ? 'undefined' : _typeof(userSizes)) === 'object') {
    var sizesHash = Object.keys(userSizes).reduce(function (acc, curr, i) {
      var _extends3;

      return _extends({}, acc, (_extends3 = {}, _extends3['z' + curr] = userSizes[curr], _extends3));
    }, {});
    if (!sizesHash['z0']) {
      sizesHash['z0'] = 0;
    }
    if (!sizesHash['z.0']) {
      delete sizesHash['z.0'];
    }
    generatedTheme.sizes = sizesHash;
  }

  if (fonts && (typeof fonts === 'undefined' ? 'undefined' : _typeof(fonts)) === 'object') {
    generatedTheme.fonts = fonts;
  }

  if (fonts && (typeof fonts === 'undefined' ? 'undefined' : _typeof(fonts)) !== 'object') {
    throw new Error('fonts object must be provided in the format:\n      {\n        fontName: \'font-family css string\',\n      }\n    ');
  }

  if (colors && (typeof colors === 'undefined' ? 'undefined' : _typeof(colors)) === 'object') {
    generatedTheme.colors = colors;
  }

  if (colors && (typeof colors === 'undefined' ? 'undefined' : _typeof(colors)) !== 'object') {
    throw new Error('colors object must be provided in the format:\n      {\n        black: \'#000000\',\n        cyan: \'cyan\',\n      }\n    ');
  }
  return generatedTheme;
  console.log(generatedTheme);
};

var defaultTheme = createTheme();

var getPropsForMPValue = function getPropsForMPValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var THEME = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (THEME.sizes === null) {
    throw new Error('can\'t generate values without theme sizes');
  }
  var formattedVal = value;
  if (value === 'a') {
    formattedVal = 'auto';
  } else {
    formattedVal = '' + THEME.sizes['z' + value];
  }
  switch (prop) {
    case 'm':
      return 'margin: ' + formattedVal + ';';
    case 'mx':
      return 'margin-left: ' + formattedVal + ';\n         margin-right: ' + formattedVal + ';';
    case 'my':
      return 'margin-top: ' + formattedVal + ';\n         margin-bottom: ' + formattedVal + ';';
    case 'mt':
      return 'margin-top: ' + formattedVal + ';';
    case 'mr':
      return 'margin-right: ' + formattedVal + ';';
    case 'mb':
      return 'margin-bottom: ' + formattedVal + ';';
    case 'ml':
      return 'margin-left: ' + formattedVal + ';';

    case 'p':
      return 'padding: ' + formattedVal + ';';
    case 'px':
      return 'padding-left: ' + formattedVal + ';\n         padding-right: ' + formattedVal + ';';
    case 'py':
      return 'padding-top: ' + formattedVal + ';\n         padding-bottom: ' + formattedVal + ';';
    case 'pt':
      return 'padding-top: ' + formattedVal + ';';
    case 'pr':
      return 'padding-right: ' + formattedVal + ';';
    case 'pb':
      return 'padding-bottom: ' + formattedVal + ';';
    case 'pl':
      return 'padding-left: ' + formattedVal + ';';

    default:
      return null;
  }
};

var getPropsForDValue = function getPropsForDValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForFSValue = function getPropsForFSValue(value) {
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

var getPropsForACValue = function getPropsForACValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForJCValue = function getPropsForJCValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForAIValue = function getPropsForAIValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForASValue = function getPropsForASValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForFlxWValue = function getPropsForFlxWValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForFlxDValue = function getPropsForFlxDValue(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

var getPropsForFlxBValue = function getPropsForFlxBValue(value, theme) {
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
      if (theme.sizes['z' + value]) {
        return '' + theme.sizes['z' + value];
      }
      throw new Error('You must provide a valid value for the flex-basis prop. One of [scale value], a, f, max-c, min-c, fit-c, c, i, init');
  }
};

var getPropsForFlValue = function getPropsForFlValue(value) {
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

var getPropsForOValue = function getPropsForOValue(value) {
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

var getPropsForTTValue = function getPropsForTTValue(value) {
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

var getPropsForTAValue = function getPropsForTAValue(value) {
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

var getPropsForVAValue = function getPropsForVAValue(value) {
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
      return '\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n      ';
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the vertical-align prop. One of t, b, m, bl, c, i, init');
  }
};

var getPropsForTDValue = function getPropsForTDValue(value) {
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

var getPropsForLSValue = function getPropsForLSValue(value) {
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

var getPropsForLHValue = function getPropsForLHValue(value, theme) {
  switch (value) {
    case 'd':
      return '1';
    case 'n':
      return 'normal';
    case 't':
      return theme.sizes['z2'].replace(/rem/, '').replace(/em/, '');
    case 'l':
      return theme.sizes['z4'].replace(/rem/, '').replace(/em/, '');
    case 'i':
      return 'inherit';
    case 'init':
      return 'initial';
    default:
      if (theme.sizes['z' + value]) {
        return theme.sizes['z' + value].replace(/rem/, '').replace(/em/, '');
        ;
      }
      throw new Error('You must provide a valid value for the line-height prop. One of [scale value], d, t, l, n, i, init');
  }
};

var getPropsForPosValue = function getPropsForPosValue(value) {
  switch (value) {
    case 'a':
      return 'position: absolute;';
    case 'r':
      return 'position: relative;';
    case 'f':
      return 'position: fixed;';
    case 's':
      return 'position: static;';
    case 'stick':
      return 'position: sticky;';
    case 'c':
      return '\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      ';
    case 'i':
      return 'position: inherit';
    case 'init':
      return 'initial';
    default:
      throw new Error('You must provide a valid value for the position prop. One of a, r, s, stick, c');
  }
};

var getPropsForWSValue = function getPropsForWSValue(value) {
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

var getPropsForColor = function getPropsForColor(value, theme) {
  if (value === 'transparent') {
    return 'transparent';
  }
  var alpha = /(.+)(\.\d)/.exec(value);
  if (alpha) {
    return Color(theme.colors['' + alpha[1]]).alpha(alpha[2]).string();
  }
  return theme.colors[value];
};

var getMarginAndPadding = function getMarginAndPadding(props, theme) {
  var newProps = '';
  if (props) {
    Object.keys(props).forEach(function (prop) {
      if (['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'].indexOf(prop) > -1) {
        newProps = '\n        ' + (newProps && newProps + ';') + '\n        ' + getPropsForMPValue(prop, props[prop], theme) + ';';
      }
    });
  }
  return newProps;
};

var getSize = function getSize(value, theme) {
  switch (value) {
    case '1of12':
      return 1 / 12 * 100 + '%';
    case '1of10':
      return 1 / 10 * 100 + '%';
    case '1of8':
      return 1 / 8 * 100 + '%';
    case '1of6':
      return 1 / 6 * 100 + '%';
    case '2of12':
      return 2 / 12 * 100 + '%';
    case '1of5':
      return 1 / 5 * 100 + '%';
    case '1of5':
      return 1 / 5 * 100 + '%';
    case '2of10':
      return 2 / 10 * 100 + '%';
    case '1of4':
      return 1 / 4 * 100 + '%';
    case '2of8':
      return 2 / 8 * 100 + '%';
    case '3of12':
      return 3 / 12 * 100 + '%';
    case '3of10':
      return 3 / 10 * 100 + '%';
    case '1of3':
      return 1 / 3 * 100 + '%';
    case '2of6':
      return 2 / 6 * 100 + '%';
    case '4of12':
      return 4 / 12 * 100 + '%';
    case '3of8':
      return 3 / 8 * 100 + '%';
    case '2of5':
      return 2 / 5 * 100 + '%';
    case '4of10':
      return 4 / 10 * 100 + '%';
    case '5of12':
      return 5 / 12 * 100 + '%';
    case '1of2':
      return 1 / 2 * 100 + '%';
    case '2of4':
      return 2 / 4 * 100 + '%';
    case '3of6':
      return 3 / 6 * 100 + '%';
    case '4of8':
      return 4 / 8 * 100 + '%';
    case '5of10':
      return 5 / 10 * 100 + '%';
    case '6of12':
      return 6 / 12 * 100 + '%';
    case '7of12':
      return 7 / 12 * 100 + '%';
    case '3of5':
      return 3 / 5 * 100 + '%';
    case '6of10':
      return 6 / 10 * 100 + '%';
    case '5of8':
      return 5 / 8 * 100 + '%';
    case '2of3':
      return 2 / 3 * 100 + '%';
    case '4of6':
      return 4 / 6 * 100 + '%';
    case '8of12':
      return 8 / 12 * 100 + '%';
    case '7of10':
      return 7 / 10 * 100 + '%';
    case '3of4':
      return 3 / 4 * 100 + '%';
    case '6of8':
      return 6 / 8 * 100 + '%';
    case '9of12':
      return 9 / 12 * 100 + '%';
    case '4of5':
      return 4 / 5 * 100 + '%';
    case '8of10':
      return 8 / 10 * 100 + '%';
    case '9of10':
      return 9 / 10 * 100 + '%';
    case '11of12':
      return 11 / 12 * 100 + '%';

    case '1/12':
      return 1 / 12 * 100 + '%';
    case '1/10':
      return 1 / 10 * 100 + '%';
    case '1/8':
      return 1 / 8 * 100 + '%';
    case '1/6':
      return 1 / 6 * 100 + '%';
    case '2/12':
      return 2 / 12 * 100 + '%';
    case '1/5':
      return 1 / 5 * 100 + '%';
    case '1/5':
      return 1 / 5 * 100 + '%';
    case '2/10':
      return 2 / 10 * 100 + '%';
    case '1/4':
      return 1 / 4 * 100 + '%';
    case '2/8':
      return 2 / 8 * 100 + '%';
    case '3/12':
      return 3 / 12 * 100 + '%';
    case '3/10':
      return 3 / 10 * 100 + '%';
    case '1/3':
      return 1 / 3 * 100 + '%';
    case '2/6':
      return 2 / 6 * 100 + '%';
    case '4/12':
      return 4 / 12 * 100 + '%';
    case '3/8':
      return 3 / 8 * 100 + '%';
    case '2/5':
      return 2 / 5 * 100 + '%';
    case '4/10':
      return 4 / 10 * 100 + '%';
    case '5/12':
      return 5 / 12 * 100 + '%';
    case '1/2':
      return 1 / 2 * 100 + '%';
    case '2/4':
      return 2 / 4 * 100 + '%';
    case '3/6':
      return 3 / 6 * 100 + '%';
    case '4/8':
      return 4 / 8 * 100 + '%';
    case '5/10':
      return 5 / 10 * 100 + '%';
    case '6/12':
      return 6 / 12 * 100 + '%';
    case '7/12':
      return 7 / 12 * 100 + '%';
    case '3/5':
      return 3 / 5 * 100 + '%';
    case '6/10':
      return 6 / 10 * 100 + '%';
    case '5/8':
      return 5 / 8 * 100 + '%';
    case '2/3':
      return 2 / 3 * 100 + '%';
    case '4/6':
      return 4 / 6 * 100 + '%';
    case '8/12':
      return 8 / 12 * 100 + '%';
    case '7/10':
      return 7 / 10 * 100 + '%';
    case '3/4':
      return 3 / 4 * 100 + '%';
    case '6/8':
      return 6 / 8 * 100 + '%';
    case '9/12':
      return 9 / 12 * 100 + '%';
    case '4/5':
      return 4 / 5 * 100 + '%';
    case '8/10':
      return 8 / 10 * 100 + '%';
    case '9/10':
      return 9 / 10 * 100 + '%';
    case '11/12':
      return 11 / 12 * 100 + '%';
    case 'full':
      return '100%';
    default:
      if (theme.size['z' + value]) {
        return theme.size['z' + value];
      }
      throw new Error('You must provide a valid value for the size prop.');
  }
};

var Shed = function Shed(_ref) {
  var _ref$component = _ref.component,
      component = _ref$component === undefined ? 'div' : _ref$component,
      props = _objectWithoutProperties(_ref, ['component']);

  var ShedStyled = styled(component)(_templateObject, function (_ref2) {
    var props = _objectWithoutProperties(_ref2, []),
        theme = _ref2.theme;

    return getMarginAndPadding(props, theme);
  }, function (_ref3) {
    var c = _ref3.c,
        theme = _ref3.theme;
    return c ? 'color: ' + getPropsForColor(c, theme) + ';' : null;
  }, function (_ref4) {
    var bg = _ref4.bg,
        theme = _ref4.theme;
    return bg ? 'background-color: ' + getPropsForColor(c, theme) + ';' : null;
  }, function (_ref5) {
    var f = _ref5.f,
        theme = _ref5.theme;
    return f ? 'font-size: ' + theme.size['z' + f] + ';' : null;
  }, function (_ref6) {
    var fw = _ref6.fw;
    return fw ? 'font-weight: ' + fw + ';' : null;
  }, function (_ref7) {
    var fs = _ref7.fs,
        theme = _ref7.theme;
    return fs ? 'font-style: ' + getPropsForFSValue(fs) + ';' : null;
  }, function (_ref8) {
    var ff = _ref8.ff,
        theme = _ref8.theme;
    return ff ? 'font-family: ' + theme.fonts['' + ff] + ';' : null;
  }, function (_ref9) {
    var ls = _ref9.ls,
        theme = _ref9.theme;
    return ls ? 'letter-spacing: ' + getPropsForLSValue(ls, theme) + ';' : null;
  }, function (_ref10) {
    var lh = _ref10.lh,
        theme = _ref10.theme;
    return lh ? 'line-height: ' + getPropsForLHValue(lh, theme) + ';' : null;
  }, function (_ref11) {
    var tt = _ref11.tt;
    return tt ? 'text-transform: ' + getPropsForTTValue(tt) + ';' : null;
  }, function (_ref12) {
    var ta = _ref12.ta;
    return ta ? 'text-align: ' + getPropsForTAValue(ta) + ';' : null;
  }, function (_ref13) {
    var va = _ref13.va;
    return va ? '' + getPropsForVAValue(va) : null;
  }, function (_ref14) {
    var td = _ref14.td;
    return td ? 'text-decoration: ' + getPropsForTDValue(td) + ';' : null;
  }, function (_ref15) {
    var d = _ref15.d;
    return d ? 'display: ' + getPropsForDValue(d) + ';' : null;
  }, function (_ref16) {
    var flxg = _ref16.flxg;
    return flxg ? 'flex-grow: ' + flxg + ';' : null;
  }, function (_ref17) {
    var flxs = _ref17.flxs;
    return flxs ? 'flex-shrink: ' + flxs + ';' : null;
  }, function (_ref18) {
    var jc = _ref18.jc;
    return jc ? 'justify-content: ' + getPropsForJCValue(jc) + ';' : null;
  }, function (_ref19) {
    var ac = _ref19.ac;
    return ac ? 'align-content: ' + getPropsForACValue(ac) + ';' : null;
  }, function (_ref20) {
    var ai = _ref20.ai;
    return ai ? 'align-items: ' + getPropsForAIValue(ai) + ';' : null;
  }, function (_ref21) {
    var as = _ref21.as;
    return as ? 'align-self: ' + getPropsForASValue(as) + ';' : null;
  }, function (_ref22) {
    var flxw = _ref22.flxw;
    return flxw ? 'flex-wrap: ' + getPropsForFlxWValue(flxw) + ';' : null;
  }, function (_ref23) {
    var flxd = _ref23.flxd;
    return flxd ? 'flex-direction: ' + getPropsForFlxDValue(flxd) + ';' : null;
  }, function (_ref24) {
    var flxb = _ref24.flxb,
        theme = _ref24.theme;
    return flxb ? 'flex-basis: ' + getPropsForFlxBValue(flxb, theme) + ';' : null;
  }, function (_ref25) {
    var fl = _ref25.fl;
    return fl ? 'float: ' + getPropsForFlValue(fl) + ';' : null;
  }, function (_ref26) {
    var pos = _ref26.pos;
    return pos ? 'position: ' + getPropsForPosValue(pos) + ';' : null;
  }, function (_ref27) {
    var top = _ref27.top,
        theme = _ref27.theme;
    return top ? 'top: ' + theme.size['z' + top] + ';' : null;
  }, function (_ref28) {
    var right = _ref28.right,
        theme = _ref28.theme;
    return right ? 'right: ' + theme.size['z' + right] + ';' : null;
  }, function (_ref29) {
    var bottom = _ref29.bottom,
        theme = _ref29.theme;
    return bottom ? 'bottom: ' + theme.size['z' + bottom] + ';' : null;
  }, function (_ref30) {
    var left = _ref30.left,
        theme = _ref30.theme;
    return left ? 'left: ' + theme.size['z' + left] + ';' : null;
  }, function (_ref31) {
    var o = _ref31.o,
        theme = _ref31.theme;
    return o ? 'overflow: ' + getPropsForOValue(o) + ';' : null;
  }, function (_ref32) {
    var ox = _ref32.ox,
        theme = _ref32.theme;
    return ox ? 'overflow-x: ' + getPropsForOValue(ox) + ';' : null;
  }, function (_ref33) {
    var oy = _ref33.oy,
        theme = _ref33.theme;
    return oy ? 'overflow-y: ' + getPropsForOValue(oy) + ';' : null;
  }, function (_ref34) {
    var zi = _ref34.zi,
        theme = _ref34.theme;
    return zi ? 'z-index: ' + zi + ';' : null;
  }, function (_ref35) {
    var ws = _ref35.ws;
    return ws ? 'white-space: ' + getPropsForWSValue(ws) + ';' : null;
  }, function (_ref36) {
    var w = _ref36.w,
        theme = _ref36.theme;
    return w ? 'width: ' + getSize(w, theme) + ';' : null;
  }, function (_ref37) {
    var mw = _ref37.mw,
        theme = _ref37.theme;
    return mw ? 'max-width: ' + getSize(w, theme) + ';' : null;
  }, function (_ref38) {
    var h = _ref38.h,
        theme = _ref38.theme;
    return h ? 'height: ' + getSize(h, theme) + ';' : null;
  });
  return React.createElement(ShedStyled, props);
};

export default Shed;
export { defaultTheme, createTheme };