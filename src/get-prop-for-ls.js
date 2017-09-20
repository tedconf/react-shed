import curry from 'ramda/src/curry';
import isValid from './is-valid';
import stripUnit from './strip-unit';
import createError from './create-error';

const getPropsForLSValue = (theme, value = null) => {
  if (isValid('letter-spacing')(value)) {
    switch (value) {
      case 'n':
        return 'normal';
      case 't':
        return '-0.05em';
      case 'l':
        return '.3em';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        if (theme.sizes[`z${value}`]) {
          return stripUnit(theme.sizes[`z${value}`]);
        }
        throw new Error(createError([
          'n',
          't',
          'l',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default curry((theme, value) => getPropsForLSValue(theme, value));
