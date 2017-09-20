import curry from 'ramda/src/curry';
import isValid from './is-valid';
import stripUnit from './strip-unit';
import createError from './create-error';

const getPropsForLHValue = (theme, value) => {
  if (isValid('line-height')(value)) {
    switch (value) {
      case 'd':
        return '1';
      case 'n':
        return 'normal';
      case 't':
        return stripUnit(theme.sizes.z2);
      case 'l':
        return stripUnit(theme.sizes.z4);
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        if (theme.sizes[`z${value}`]) {
          return stripUnit(theme.sizes[`z${value}`]);
        }
        throw new Error(createError([
          'scale value',
          'd',
          't',
          'l',
          'n',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default curry((theme, value) => getPropsForLHValue(theme, value));
