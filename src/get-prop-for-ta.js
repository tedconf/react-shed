import isValid from './is-valid';
import createError from './create-error';

const getPropsForTAValue = (value = null) => {
  if (isValid('text-align')(value)) {
    switch (value) {
      case 'c':
        return 'center';
      case 'l':
        return 'left';
      case 'r':
        return 'right';
      case 'j':
        return 'justify';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'c',
          'l',
          'r',
          'j',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForTAValue;
