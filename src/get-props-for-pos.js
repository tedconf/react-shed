import isValid from './is-valid';
import createError from './create-error';

const getPropsForPosValue = (value = null) => {
  if (isValid('position')(value)) {
    switch (value) {
      case 'a':
        return { position: 'absolute' };
      case 'r':
        return { position: 'relative' };
      case 'f':
        return { position: 'fixed' };
      case 's':
        return { position: 'static' };
      case 'stick':
        return { position: 'sticky' };
      case 'c':
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
      case 'i':
        return { position: 'inherit' };
      case 'init':
        return { position: 'initial' };
      default:
        throw new Error(createError([
          'a',
          'r',
          's',
          'stick',
          'c',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForPosValue;
