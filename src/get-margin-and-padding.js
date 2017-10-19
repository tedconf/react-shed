import curry from 'ramda/src/curry';
import mqProps from 'mq-props';
import compose from 'ramda/src/compose';
import keys from 'ramda/src/keys';
import pathOr from 'ramda/src/pathOr';
import reduce from 'ramda/src/reduce';
import isValid from './is-valid';
import getSize from './get-size';

const getPropsForMPValue = (prop, value = null, THEME = null) => {
  const mq = mqProps(THEME.mqs || []);
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
        ...mq('margin')(formattedVal),
      },
      mx: {
        ...mq('marginLeft')(formattedVal),
        ...mq('marginRight')(formattedVal),
      },
      my: {
        ...mq('marginTop')(formattedVal),
        ...mq('marginBottom')(formattedVal),
      },
      mt: {
        ...mq('marginTop')(formattedVal),
      },
      mr: {
        ...mq('marginRight')(formattedVal),
      },
      mb: {
        ...mq('marginBottom')(formattedVal),
      },
      ml: {
        ...mq('marginLeft')(formattedVal),
      },
      p: {
        ...mq('padding')(formattedVal),
      },
      px: {
        ...mq('paddingLeft')(formattedVal),
        ...mq('paddingRight')(formattedVal),
      },
      py: {
        ...mq('paddingTop')(formattedVal),
        ...mq('paddingBottom')(formattedVal),
      },
      pt: {
        ...mq('paddingTop')(formattedVal),
      },
      pr: {
        ...mq('paddingRight')(formattedVal),
      },
      pb: {
        ...mq('paddingBottom')(formattedVal),
      },
      pl: {
        ...mq('paddingLeft')(formattedVal),
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
