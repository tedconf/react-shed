import curry from 'ramda/src/curry';
import mqProps from 'mq-props';
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
  const mq = mqProps(THEME.mqs || []);
  if (isValid('border-radius')(value)) {
    const formattedVal = getSize(THEME, value);
    if (THEME.sizes === null) {
      throw new Error('can\'t generate values without theme sizes');
    }

    switch (prop) {
      case 'br':
        return {
          ...mq('borderRadius')(formattedVal),
        };
      case 'brl':
        return {
          ...mq('borderTopLeftRadius')(formattedVal),
          ...mq('borderBottomLeftRadius')(formattedVal),
        };
      case 'brr':
        return {
          ...mq('borderTopRightRadius')(formattedVal),
          ...mq('borderBottomRightRadius')(formattedVal),
        };
      case 'brt':
        return {
          ...mq('borderTopLeftRadius')(formattedVal),
          ...mq('borderTopRightRadius')(formattedVal),
        };
      case 'brb':
        return {
          ...mq('borderBottomLeftRadius')(formattedVal),
          ...mq('borderBottomRightRadius')(formattedVal),
        };
      case 'brtr':
        return {
          ...mq('borderTopRightRadius')(formattedVal),
        };
      case 'brbr':
        return {
          ...mq('borderBottomRightRadius')(formattedVal),
        };
      case 'brbl':
        return {
          ...mq('borderBottomLeftRadius')(formattedVal),
        };
      case 'brtl':
        return {
          ...mq('borderTopLeftRadius')(formattedVal),
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
