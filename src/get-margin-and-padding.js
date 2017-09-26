import curry from 'ramda/src/curry';
import compose from 'ramda/src/compose';
import keys from 'ramda/src/keys';
import pathOr from 'ramda/src/pathOr';
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

    const propsMap = {
      m: {
        margin: formattedVal,
      },
      mx: {
        marginLeft: formattedVal,
        marginRight: formattedVal,
      },
      my: {
        marginTop: formattedVal,
        marginBottom: formattedVal,
      },
      mt: {
        marginTop: formattedVal,
      },
      mr: {
        marginRight: formattedVal,
      },
      mb: {
        marginBottom: formattedVal,
      },
      ml: {
        marginLeft: formattedVal,
      },
      p: {
        padding: formattedVal,
      },
      px: {
        paddingLeft: formattedVal,
        paddingRight: formattedVal,
      },
      py: {
        paddingTop: formattedVal,
        paddingBottom: formattedVal,
      },
      pt: {
        paddingTop: formattedVal,
      },
      pr: {
        paddingRight: formattedVal,
      },
      pb: {
        paddingBottom: formattedVal,
      },
      pl: {
        paddingLeft: formattedVal,
      },
    };

    return pathOr(null)([prop])(propsMap);
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
