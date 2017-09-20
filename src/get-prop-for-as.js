import isValid from './is-valid';
import createError from './create-error';

const getPropsForASValue = (value = null) => {
  if (isValid('align-self')(value)) {
    switch (value) {
      case 'a':
        return 'auto';
      case 'f-s':
        return 'flex-start';
      case 'fs':
        return 'flex-start';
      case 'f-e':
        return 'flex-end';
      case 'fe':
        return 'flex-end';
      case 'c':
        return 'center';
      case 'b':
        return 'baseline';
      case 's':
        return 'stretch';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';

      default:
        throw new Error(createError([
          'a',
          'fs|f-s',
          'fe|f-e',
          'c',
          's',
          'b',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForASValue;
