/* eslint-disable */
import React, { createElement } from 'react';
import get from 'ramda/src/prop';
import omit from 'ramda/src/omit';
import tap from 'ramda/src/tap';
import compose from 'ramda/src/compose';
import length from 'ramda/src/length';
import lt from 'ramda/src/lt';
import keys from 'ramda/src/keys';
import PropTypes from 'prop-types';
import Color from 'color';
import glamorous, { withTheme } from 'glamorous';
import stripUnit from './strip-unit';
import isValid from './is-valid';
import createTheme from './create-theme';
import cleanProps from './clean-props';
import getPropsForColor from './get-props-for-color';
// import getPropsForFSValue from './get-props-for-fs';
import getSize from './get-size';

const getPropsForMPValue = (prop, value = null, THEME = null) => {
  if (isValid('margin / padding')(value)) {
    let formattedVal = value;
    if (THEME.sizes === null) {
      throw new Error('can\'t generate values without theme sizes');
    }

    if (prop === 'mx' && value === 'r') {
      formattedVal = 'calc(-50vw + 50%)';
    }

    if (value === 'a') {
      formattedVal = 'auto';
    }

    if (value !== 'a' && value !== 'r') {
      formattedVal = getSize(value, THEME);
    }

    switch (prop) {
      case 'm':
        return {
          margin: formattedVal,
        };
      case 'mx':
        return {
          marginLeft: formattedVal,
          marginRight: formattedVal,
        };
      case 'my':
        return {
          marginTop: formattedVal,
          marginBottom: formattedVal,
        };
      case 'mt':
        return {
          marginTop: formattedVal,
        };
      case 'mr':
        return {
          marginRight: formattedVal,
        };
      case 'mb':
        return {
          marginBottom: formattedVal,
        };
      case 'ml':
        return {
          marginLeft: formattedVal,
        };

      case 'p':
        return {
          padding: formattedVal,
        };
      case 'px':
        return {
          paddingLeft: formattedVal,
          paddingRight: formattedVal,
        };
      case 'py':
        return {
          paddingTop: formattedVal,
          paddingBottom: formattedVal,
        };
      case 'pt':
        return {
          paddingTop: formattedVal,
        };
      case 'pr':
        return {
          paddingRight: formattedVal,
        };
      case 'pb':
        return {
          paddingBottom: formattedVal,
        };
      case 'pl':
        return {
          paddingLeft: formattedVal,
        };

      default:
        return null;
    }
  }
  return value;
};

const getPropsForBRValue = (prop, value = null, THEME = null) => {
  if (isValid('border-radius')(value)) {
    const formattedVal = getSize(THEME, value);
    if (THEME.sizes === null) {
      throw new Error('can\'t generate values without theme sizes');
    }

    switch (prop) {
      case 'br':
        return {
          borderRadius: formattedVal,
        };
      case 'brl':
        return {
          borderTopLeftRadius: formattedVal,
          borderBottomLeftRadius: formattedVal,
        };
      case 'brr':
        return {
          borderTopRightRadius: formattedVal,
          borderBottomRightRadius: formattedVal,
        };
      case 'brt':
        return {
          borderTopLeftRadius: formattedVal,
          borderTopRightRadius: formattedVal,
        };
      case 'brb':
        return {
          borderBottomLeftRadius: formattedVal,
          borderBottomRightRadius: formattedVal,
        };
      case 'brtr':
        return {
          borderTopRightRadius: formattedVal,
        };
      case 'brbr':
        return {
          borderBottomRightRadius: formattedVal,
        };
      case 'brbl':
        return {
          borderBottomLeftRadius: formattedVal,
        };
      case 'brtl':
        return {
          borderTopLeftRadius: formattedVal,
        };

      default:
        return null;
    }
  }
  return value;
};

const getPropsForLSTValue = (value = null) => {
  if (isValid('list-style-type')(value)) {
    switch (value) {
      case 'd':
        return 'disc';
      case 'c':
        return 'circle';
      case 's':
        return 'square';
      case 'dec':
        return 'decimal';
      case 'g':
        return 'georgian';
      case 'cjk-i':
        return 'cjk-ideographic';
      case 'k':
        return 'kannada';
      case 'inherit':
        return 'inherit';
      case 'initial':
        return 'initial';
      case 'unset':
        return 'unset';
      case 'n':
        return 'none';

      default:
        return value;
    }
  }

  return value;
};

const getPropsForDValue = (value = null) => {
  if (isValid('display')(value)) {
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
        throw new Error(`You must provide a valid value for the display prop. One of b, i-b, i, f, i-f, t, t-c, t-r, n, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForCurValue = (value = null) => {
  if (isValid('cursor')(value)) {
    switch (value) {
      case 'h':
        return 'help';
      case 'n-a':
        return 'not-allowed';
      case 'g':
        return 'grab';
      case 'gg':
        return 'grabbing';
      case 'p':
        return 'pointer';
      case 'd':
        return 'default';
      case 'a':
        return 'auto';
      case 'n':
        return 'none';
      case 'init':
        return 'initial';
      default:
        return 'value';
    }
  }

  return value;
};

const getPropsForACValue = (value = null) => {
  if (isValid('align-content')(value)) {
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
        throw new Error(`You must provide a valid value for the align-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForJCValue = (value = null) => {
  if (isValid('justify-content')(value)) {
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
        throw new Error(`You must provide a valid value for the justify-content prop. One of f-s, f-e, c, s-b, s-e, s-a, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForAIValue = (value = null) => {
  if (isValid('align-items')(value)) {
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
        throw new Error(`You must provide a valid value for the align-items prop. One of f-s, f-e, c, b, s, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForASValue = (value = null) => {
  if (isValid('align-self')(value)) {
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
        throw new Error(`You must provide a valid value for the align-self prop. One of a, f-s, f-e, c, b, s, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForFlxWValue = (value = null) => {
  if (isValid('flex-wrap')(value)) {
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
        throw new Error(`You must provide a valid value for the flex-wrap prop. One of nw, w, wr, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForFlxDValue = (value = null) => {
  if (isValid('flex-direction')(value)) {
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
        throw new Error(`You must provide a valid value for the flex-direction prop. One of r, rr, c, cr, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForFlxBValue = (value, theme) => {
  if (isValid('flex-basis')(value)) {
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
        getSize(theme, value);

        throw new Error(`You must provide a valid value for the flex-basis prop. One of [scale value], a, f, max-c, min-c, fit-c, c, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForFlValue = (value = null) => {
  if (isValid('float')(value)) {
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
        throw new Error(`You must provide a valid value for the float prop. One of l, r, n, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForOValue = (value = null) => {
  if (isValid('overflow')(value)) {
    switch (value) {
      case 'a':
        return 'auto';
      case 'h':
        return 'hidden';
      case 's':
        return 'scroll';
      case 'v':
        return 'visible';
      default:
        throw new Error(`You must provide a valid value for the overflow prop. One of a, h, s, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForTTValue = (value = null) => {
  if (isValid('text-transform')(value)) {
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
        throw new Error(`You must provide a valid value for the text-transform prop. One of u, c, l, n, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForTAValue = (value = null) => {
  if (isValid('text-align')(value)) {
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
        throw new Error(`You must provide a valid value for the text-align prop. One of c, l, r, j, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForVAValue = (value = null) => {
  if (isValid('vertical-align')(value)) {
    switch (value) {
      case 't':
        return {
          verticalAlign: 'top',
        };
      case 'b':
        return {
          verticalAlign: 'bottom',
        };
      case 'm':
        return {
          verticalAlign: 'middle',
        };
      case 'bl':
        return {
          verticalAlign: 'baseline',
        };
      case 'c':
        return {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'i':
        return {
          verticalAlign: 'inherit',
        };
      case 'init':
        return {
          verticalAlign: 'initial',
        };
      default:
        throw new Error(`You must provide a valid value for the vertical-align prop. One of t, b, m, bl, c, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForTDValue = (value = null) => {
  if (isValid('text-decoration')(value)) {
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
        throw new Error(`You must provide a valid value for the text-decoration prop. One of u, o, b, l-t, n, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForLSValue = (value = null, theme) => {
  if (isValid('letter-spacing')(value)) {
    switch (value) {
      case 'n':
        return 'normal';
      case 't':
        return '-0.05em';
      case 'l':
        return '.3em';
      default:
        if (theme.sizes[`z${value}`]) {
          return stripUnit(theme.sizes[`z${value}`]);
        }
        throw new Error(`You must provide a valid value for the letter-spacing prop. One of n, t, l, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForLHValue = (value, theme) => {
  if (isValid('line-height')(value)) {
    switch (value) {
      case 'd':
        return '1';
      case 'n':
        return 'normal';
      case 't':
        return stripUnit(theme.sizes.z2);
      case 'l':
        return stripUnit(theme.sizes.z4);
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        if (theme.sizes[`z${value}`]) {
          return stripUnit(theme.sizes[`z${value}`]);
        }
        throw new Error(`You must provide a valid value for the line-height prop. One of [scale value], d, t, l, n, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForPosValue = (value = null) => {
  if (isValid('position')(value)) {
    switch (value) {
      case 'a':
        return { position: 'absolute' };
      case 'r':
        return { position: 'relative' };
      case 'f':
        return { position: 'fixed' };
      case 's':
        return { position: 'static' };
      case 'stick':
        return { position: 'sticky' };
      case 'c':
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
      case 'i':
        return { position: 'inherit' };
      case 'init':
        return { position: 'initial' };
      default:
        throw new Error(`You must provide a valid value for the position prop. One of a, r, s, stick, c, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getPropsForWSValue = (value = null) => {
  if (isValid('white-space')(value)) {
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
        throw new Error(`You must provide a valid value for the white-space prop. One of n, nw, p, p-w, p-l, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

const getMarginAndPadding = (props, theme) => {
  let newProps = {};
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
        newProps = {
          ...newProps,
          ...getPropsForMPValue(prop, props[prop], theme),
        };
      }
    });
  }
  return newProps;
};

const getBorderRadius = (props, theme) => {
  let newProps = {};
  if (props) {
    Object.keys(props).forEach((prop) => {
      if ([
        'br',
        'brx',
        'bry',
        'brt',
        'brr',
        'brb',
        'brl',
        'brtr',
        'brtl',
        'brbr',
        'brbl',
      ].indexOf(prop) > -1) {
        newProps = {
          ...newProps,
          ...getPropsForBRValue(prop, props[prop], theme),
        };
      }
    });
  }
  return newProps;
};

const getOpacity = (value = null) => {
  if (isValid('opacity')(value)) {
    const parsedVal = parseInt(value, 10);
    if (parsedVal > 1 || parsedVal < 0) {
      throw new Error(`You must provide a valid value for the opacity prop: A number between 0 and 1, or i/init/unset, not ${JSON.stringify(value)}`);
    }
    return value;
  }

  return value;
};

const orNull = (predicate, func) => {
  if (!predicate) {
    return null;
  }
  if (predicate) {
    if (func) {
      return func;
    }
    return predicate;
  }
  return null;
};

const log = tap(console.log);

const getPropForProps = (props, theme) => {
  if (
    compose(
      lt(0),
      length,
      keys,
      omit(['children'])
    )(props)
  ) {
    return Object.keys(props).reduce((acc) => {
      const getProp = prop => get(prop)(props);
      return {
        ...acc,
        // ...getMarginAndPadding(props, theme),
        color: orNull(getProp('c'), getPropsForColor(getProp('c'), theme)),
        backgroundColor: orNull(getProp('bg'), getPropsForColor(getProp('bg'), theme)),
        fontSize: orNull(getProp('f'), getSize(theme, getProp('f'))),
        fontWeight: orNull(getProp('fw')),
        // fontStyle: orNull(getProp('fs'), getPropsForFSValue(getProp('fs'))),
        // fontFamily: orNull(get(`fonts.${getProp('ff')}`)(theme)),
        // letterSpacing: orNull(getProp('ls'), getPropsForLSValue(getProp('ls'), theme)),
        // lineHeight: orNull(getProp('lh'), getPropsForLHValue(getProp('lh'), theme)),
        // textTransform: orNull(getProp('tt'), getPropsForTTValue(getProp('tt'))),
        // textAlign: orNull(getProp('ta'), getPropsForTAValue(getProp('ta'))),
        // verticalAlign: orNull(getProp('va'), getPropsForVAValue(getProp('va'))),
        // textDecoration: orNull(getProp('td'), getPropsForTDValue(getProp('td'))),
        // textDecorationColor: orNull(getProp('tdc'), getPropsForColor(getProp('tdc'), theme)),
        // display: orNull(getProp('d'), getPropsForDValue(getProp('d'))),
        // width: orNull(getProp('w'), getSize(getProp('w'), theme)),
        // maxWidth: orNull(getProp('mw'), getSize(getProp('mw'), theme)),
        // height: orNull(getProp('h'), getSize(getProp('h'), theme)),
        // opacity: orNull(getProp('op'), getOpacity(getProp('op'))),
        // cursor: orNull(getProp('cur'), getPropsForCurValue(getProp('cur'))),
        // flexGrow: orNull(getProp('flxg')),
        // flexShrink: orNull(getProp('flxs')),
        // justifyContent: orNull(getProp('jc'), getPropsForJCValue(getProp('jc'))),
        // alignContent: orNull(getProp('ac'), getPropsForACValue(getProp('ac'))),
        // alignItems: orNull(getProp('ai'), getPropsForAIValue(getProp('ai'))),
        // alignSelf: orNull(getProp('as'), getPropsForASValue(getProp('as'))),
        // flexWrap: orNull(getProp('flxw'), getPropsForFlxWValue(getProp('flxw'))),
        // flexDirection: orNull(getProp('flxd'), getPropsForFlxDValue(getProp('flxd'))),
        // flexBasis: orNull(getProp('flxb'), getPropsForFlxBValue(getProp('flxb'), theme)),
        // float: orNull(getProp('fl'), getPropsForFlValue(getProp('fl'))),
        // position: orNull(getProp('pos'), getPropsForPosValue(getProp('pos'))),
        // top: orNull(getProp('top'), getSize(getProp('top'), theme)),
        // bottom: orNull(getProp('bottom'), getSize(getProp('bottom'), theme)),
        // right: orNull(getProp('right'), getSize(getProp('right'), theme)),
        // left: orNull(getProp('left'), getSize(getProp('left'), theme)),
        // overflow: orNull(getProp('o'), getPropsForOValue(getProp('o'))),
        // overflowX: orNull(getProp('ox'), getPropsForOValue(getProp('ox'))),
        // overflowY: orNull(getProp('oy'), getPropsForOValue(getProp('oy'))),
        // zIndex: orNull(getProp('zi')),
        // whiteSpace: orNull(getProp('ws'), getPropsForWSValue(getProp('ws'))),
        // listStyleType: orNull(getProp('lst'), getPropsForLSTValue(getProp('lst'))),
        // ...getBorderRadius(props, theme),
      };
    }, {})
  }
  return false;
};

const Shed = ({
  component = 'div',
  children,
  ...rest
}) => {
  const ShedStyled = glamorous(component)(({theme, ...props}) => getPropForProps(props, theme));
  return <ShedStyled {...rest}>{children}</ShedStyled>;
};

Shed.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  theme: PropTypes.shape({
    sizes: PropTypes.any,
    steps: PropTypes.number,
    colors: PropTypes.object,
    fonts: PropTypes.object,
  }),
};

Shed.defaultProps = {
  theme: createTheme(),
  component: 'div',
};

const ThemedShed = withTheme(Shed);

export {
  ThemedShed as default,
  createTheme,
};
