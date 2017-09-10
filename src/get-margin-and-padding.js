import curry from 'ramda/src/curry';
import compose from 'ramda/src/compose';
import keys from 'ramda/src/keys';
import reduce from 'ramda/src/reduce';
import isValid from './is-valid';
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
      formattedVal = getSize(THEME)(value);
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

const getMarginAndPadding = (props, theme) => {
  const APPLIED_KEYS = [
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
  ];

  if (props) {
    return compose(
      reduce((acc, curr) => {
        if (APPLIED_KEYS.indexOf(curr) > -1) {
          return {
            ...acc,
            ...getPropsForMPValue(curr, props[curr], theme),
          };
        }
        return acc;
      }, {}),
      keys,
    )(props);
  }
  return {};
};

export default curry((theme, props) => getMarginAndPadding(props, theme));
