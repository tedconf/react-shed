import Color from 'color';
import path from 'ramda/src/path';
import isValid from './is-valid';

const getPropsForColor = (value, theme) => {
  if (isValid('color')(value)) {
    if (value === 'transparent') {
      return 'transparent';
    }
    if (value === 'currentColor') {
      return 'currentColor';
    }
    if (value === 'inherit') {
      return 'inherit';
    }
    const alpha = /(.+)(\.\d)/.exec(value);
    if (alpha) {
      return Color(path(['colors', alpha[1]])(theme))
        .alpha(alpha[2])
        .string();
    }
    return path(['colors', value])(theme);
  }

  return value;
};

export default getPropsForColor;
