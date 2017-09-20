import isValid from './is-valid';
import createError from './create-error';

const getPropsForTTValue = (value = null) => {
  if (isValid('text-transform')(value)) {
    switch (value) {
      case 'u':
        return 'uppercase';
      case 'c':
        return 'capitalize';
      case 'l':
        return 'lowercase';
      case 'n':
        return 'none';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'u',
          'c',
          'l',
          'n',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForTTValue;
