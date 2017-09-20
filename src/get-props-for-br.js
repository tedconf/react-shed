import curry from 'ramda/src/curry';
import keys from 'ramda/src/keys';
import reduce from 'ramda/src/reduce';
import compose from 'ramda/src/compose';
import __ from 'ramda/src/__';
import intersection from 'ramda/src/intersection';
import isValid from './is-valid';
import getSize from './get-size';

const WHITELIST = [
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
];

const getPropsForBRValue = (THEME, prop, value = null) => {
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
        return {};
    }
  }
  return {};
};

const getBorderRadius = (theme, whitelist, props = {}) => (
  compose(
    reduce((acc, prop) => ({
      ...acc,
      ...getPropsForBRValue(theme, prop, props[prop]),
    }), {}),
    intersection(__, whitelist),
    keys,
  )(props)
);

export default curry((theme, props) => getBorderRadius(theme, WHITELIST, props));
