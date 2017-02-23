import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _typeof from 'babel-runtime/helpers/typeof';
import _taggedTemplateLiteralLoose from 'babel-runtime/helpers/taggedTemplateLiteralLoose';
import _extends from 'babel-runtime/helpers/extends';

var _templateObject = _taggedTemplateLiteralLoose(['\n  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;font-family:sans-serif;line-height:1.5;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}body,button,figure,h1,input,optgroup,select,textarea{margin:0}h1{font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:100%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit;border:0;padding:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden],template{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]{clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-hidden=false][hidden]:focus{clip:auto}[aria-disabled]{cursor:default}\n'], ['\n  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;font-family:sans-serif;line-height:1.5;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}body,button,figure,h1,input,optgroup,select,textarea{margin:0}h1{font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:100%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit;border:0;padding:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden],template{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]{clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-hidden=false][hidden]:focus{clip:auto}[aria-disabled]{cursor:default}\n']);

import React from 'react';
import Color from 'color';
import ms from 'modularscale';
import styled, { injectGlobal, withTheme } from 'styled-components';

var sizes = function sizes() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'major second';
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return Array.from([].concat(Array(number))).reduce(function (acc, curr, i) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2['z' + i] = ms(i - 1, scale) + 'rem', _extends2.z0 = 0, _extends2['z.' + (number - i)] = ms(-1 - i, scale) + 'rem', _extends2));
  }, {});
};

var reset = injectGlobal(_templateObject);

var createTheme = function createTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    sizes: 'major second',
    steps: 20,
    colors: {
      black: '#000000',
      white: '#ffffff',
      cyan: 'cyan',
      magenta: 'magenta',
      yellow: 'yellow'
    },
    fonts: {
      sans: 'sans-serif',
      serif: 'serif',
      mono: 'monospace'
    }
  };

  var generatedTheme = {};

  if (userTheme.sizes && typeof userTheme.sizes === 'string') {
    try {
      generatedTheme.sizes = sizes(userTheme.sizes, userTheme.steps);
    } catch (e) {
      throw new Error(e);
    }
  }

  if (userTheme.sizes && _typeof(userTheme.sizes) === 'object') {
    var sizesHash = Object.keys(userTheme.sizes).reduce(function (acc, curr, i) {
      var _extends3;

      return _extends({}, acc, (_extends3 = {}, _extends3['z' + curr] = userTheme.sizes[curr], _extends3));
    }, {});
    if (!sizesHash['z0']) {
      sizesHash['z0'] = 0;
    }
    if (!sizesHash['z.0']) {
      delete sizesHash['z.0'];
    }
    generatedTheme.sizes = sizesHash;
  }

  if (userTheme.fonts && _typeof(userTheme.fonts) === 'object') {
    generatedTheme.fonts = userTheme.fonts;
  }

  if (userTheme.fonts && _typeof(userTheme.fonts) !== 'object') {
    throw new Error('fonts object must be provided in the format:\n      {\n        fontName: \'font-family css string\',\n      }\n    ');
  }

  if (userTheme.colors && _typeof(userTheme.colors) === 'object') {
    generatedTheme.colors = userTheme.colors;
  }

  if (userTheme.colors && _typeof(userTheme.colors) !== 'object') {
    throw new Error('colors object must be provided in the format:\n      {\n        black: \'#000000\',\n        cyan: \'cyan\',\n      }\n    ');
  }
  if (generatedTheme.sizes['z.0']) {
    delete generatedTheme.sizes['z.0'];
  }
  return generatedTheme;
};

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

var getPropsForDValue = function getPropsForDValue(value) {
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
      throw new Error('You must provide a valid value for the display prop. One of b, i-b, i, f, i-f, t, t-c, t-r, n, init, not ' + value);
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
      throw new Error('You must provide a valid value for the font-style prop. One of n, i, o, i, init, not ' + value);
  }
};

var getPropsForACValue = function getPropsForACValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the align-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init, not ' + value);
  }
};

var getPropsForJCValue = function getPropsForJCValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the justify-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init, not ' + value);
  }
};

var getPropsForAIValue = function getPropsForAIValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the align-items prop. One of f-s, f-e, c, b, s, i, init, not ' + value);
  }
};

var getPropsForASValue = function getPropsForASValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the align-self prop. One of a, f-s, f-e, c, b, s, i, init, not ' + value);
  }
};

var getPropsForFlxWValue = function getPropsForFlxWValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the flex-wrap prop. One of nw, w, wr, i, init, not ' + value);
  }
};

var getPropsForFlxDValue = function getPropsForFlxDValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
      throw new Error('You must provide a valid value for the flex-direction prop. One of r, rr, c, cr, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the flex-basis prop. One of [scale value], a, f, max-c, min-c, fit-c, c, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the float prop. One of l, r, n, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the overflow prop. One of a, h, s, not ' + value);
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
      throw new Error('You must provide a valid value for the text-transform prop. One of u, c, l, n, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the text-align prop. One of c, l, r, j, not ' + value);
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
      throw new Error('You must provide a valid value for the vertical-align prop. One of t, b, m, bl, c, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the text-decoration prop. One of u, o, b, l-t, n, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the letter-spacing prop. One of n, t, l, not ' + value);
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
      throw new Error('You must provide a valid value for the line-height prop. One of [scale value], d, t, l, n, i, init, not ' + value);
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
      throw new Error('You must provide a valid value for the position prop. One of a, r, s, stick, c, not ' + value);
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
      throw new Error('You must provide a valid value for the white-space prop. One of n, nw, p, p-w, p-l, i, init, not ' + value);
  }
};

var getPropsForColor = function getPropsForColor(value, theme) {
  if (value === 'transparent') {
    return 'transparent';
  }
  if (value === 'currentColor') {
    return 'currentColor';
  }
  if (value === 'inherit') {
    return 'inherit';
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
    case 'a':
      return 'auto';
    default:
      if (theme.sizes['z' + value]) {
        return theme.sizes['z' + value];
      }
      throw new Error('You must provide a valid value for the size prop, not ' + value);
  }
};

var Shed = function Shed(_ref) {
  var _ref$component = _ref.component,
      component = _ref$component === undefined ? 'div' : _ref$component,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? createTheme() : _ref$theme,
      props = _objectWithoutProperties(_ref, ['component', 'theme']);

  var ShedStyled = styled(component)(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], function (_ref2) {
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
    return bg ? 'background-color: ' + getPropsForColor(bg, theme) + ';' : null;
  }, function (_ref5) {
    var f = _ref5.f,
        theme = _ref5.theme;
    return f ? 'font-size: ' + theme.sizes['z' + f] + ';' : null;
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
    return top ? 'top: ' + theme.sizes['z' + top] + ';' : null;
  }, function (_ref28) {
    var right = _ref28.right,
        theme = _ref28.theme;
    return right ? 'right: ' + theme.sizes['z' + right] + ';' : null;
  }, function (_ref29) {
    var bottom = _ref29.bottom,
        theme = _ref29.theme;
    return bottom ? 'bottom: ' + theme.sizes['z' + bottom] + ';' : null;
  }, function (_ref30) {
    var left = _ref30.left,
        theme = _ref30.theme;
    return left ? 'left: ' + theme.sizes['z' + left] + ';' : null;
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
    var br = _ref36.br,
        theme = _ref36.theme;
    return br ? 'border-radius: ' + getSize(br, theme) + ';' : null;
  }, function (_ref37) {
    var brl = _ref37.brl,
        theme = _ref37.theme;
    return brl ? '\n        border-top-left-radius: ' + getSize(brl, theme) + ';\n        border-bottom-left-radius: ' + getSize(brl, theme) + ';\n      ' : null;
  }, function (_ref38) {
    var brr = _ref38.brr,
        theme = _ref38.theme;
    return brr ? '\n        border-top-right-radius: ' + getSize(brr, theme) + ';\n        border-bottom-right-radius: ' + getSize(brr, theme) + ';\n      ' : null;
  }, function (_ref39) {
    var brt = _ref39.brt,
        theme = _ref39.theme;
    return brt ? '\n        border-top-left-radius: ' + getSize(brt, theme) + ';\n        border-top-right-radius: ' + getSize(brt, theme) + ';\n      ' : null;
  }, function (_ref40) {
    var brb = _ref40.brb,
        theme = _ref40.theme;
    return brb ? '\n        border-bottom-left-radius: ' + getSize(brb, theme) + ';\n        border-bottom-right-radius: ' + getSize(brb, theme) + ';\n      ' : null;
  }, function (_ref41) {
    var brtl = _ref41.brtl,
        theme = _ref41.theme;
    return brtl ? '\n        border-top-left-radius: ' + getSize(brtl, theme) + ';\n      ' : null;
  }, function (_ref42) {
    var brtr = _ref42.brtr,
        theme = _ref42.theme;
    return brtr ? '\n        border-top-right-radius: ' + getSize(brtr, theme) + ';\n      ' : null;
  }, function (_ref43) {
    var brbr = _ref43.brbr,
        theme = _ref43.theme;
    return brbr ? '\n        border-bottom-right-radius: ' + getSize(brbr, theme) + ';\n      ' : null;
  }, function (_ref44) {
    var brbl = _ref44.brbl,
        theme = _ref44.theme;
    return brbl ? '\n        border-bottom-left-radius: ' + getSize(brbl, theme) + ';\n      ' : null;
  }, function (_ref45) {
    var w = _ref45.w,
        theme = _ref45.theme;
    return w ? 'width: ' + getSize(w, theme) + ';' : null;
  }, function (_ref46) {
    var mw = _ref46.mw,
        theme = _ref46.theme;
    return mw ? 'max-width: ' + getSize(mw, theme) + ';' : null;
  }, function (_ref47) {
    var h = _ref47.h,
        theme = _ref47.theme;
    return h ? 'height: ' + getSize(h, theme) + ';' : null;
  });

  return React.createElement(ShedStyled, props);
};

export { Shed as default, createTheme, reset };