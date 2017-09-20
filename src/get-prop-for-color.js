import curry from 'ramda/src/curry';
import parse from 'pure-color/parse';
import CSS_NAMES from 'css-color-names';
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
        let colorHash;
        colorHash = parse(theme.colors[`${alpha[1]}`]);
        if ((theme.colors[`${alpha[1]}`]).charAt(0) !== '#') {
          colorHash = parse(CSS_NAMES[theme.colors[`${alpha[1]}`]]);
        }
        return `rgba(${colorHash[0]}, ${colorHash[1]}, ${colorHash[2]}, ${parseFloat(alpha[2], 10)})`;
      }
      return theme.colors[value];
    }
    return value;
  }
  return null;
};

export default curry((theme, value) => getPropsForColor(theme, value));
