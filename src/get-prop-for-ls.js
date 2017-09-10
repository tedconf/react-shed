import isValid from './is-valid';
import stripUnit from './strip-unit';

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

export default getPropsForLSValue;
