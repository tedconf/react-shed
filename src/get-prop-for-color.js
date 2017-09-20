import curry from 'ramda/src/curry';
import parse from 'pure-color/parse';
import isValid from './is-valid';

const getPropsForColor = (theme, value) => {
  if (value) {
    if (isValid('color')(value)) {
      if (value === 'transparent') {
        return 'transparent';
      }
      if (value === 'currentColor') {
        return 'currentColor';
      }
      if (value === 'inherit' || value === 'i') {
        return 'inherit';
      }
      const alpha = /(.+)(\.\d+)/.exec(value);
      if (alpha) {
        const colorHash = parse(theme.colors[`${alpha[1]}`]);
        return `rgba(${colorHash[0]}, ${colorHash[1]}, ${colorHash[2]}, ${parseFloat(alpha[2], 10)})`;
      }
      return theme.colors[value];
    }
    return value;
  }
  return null;
};

export default curry((theme, value) => getPropsForColor(theme, value));
