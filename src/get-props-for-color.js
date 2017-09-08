import Color from 'color';
import isValid from './is-valid';

const getPropsForColor = (value, theme) => {
  if (value) {
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
        return Color(theme.colors[`${alpha[1]}`]).alpha(alpha[2]).string();
      }
      return theme.colors[value];
    }
    return value;
  }
  return null;
};

export default getPropsForColor;
