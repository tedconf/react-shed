import isValid from './is-valid';
import createError from './create-error';

const getPropsForFSValue = (value = null) => {
  if (isValid('font-style')(value)) {
    switch (value) {
      case 'n':
        return 'normal';
      case 'it':
        return 'italic';
      case 'o':
        return 'oblique';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'n',
          'it',
          'o',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForFSValue;
