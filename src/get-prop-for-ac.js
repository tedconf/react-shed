import isValid from './is-valid';
import createError from './create-error';

const getPropsForACValue = (value = null) => {
  if (isValid('align-content')(value)) {
    switch (value) {
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
      case 's':
        return 'stretch';
      case 's-b':
        return 'space-between';
      case 'sb':
        return 'space-between';
      case 's-e':
        return 'space-evenly';
      case 'se':
        return 'space-evenly';
      case 's-a':
        return 'space-around';
      case 'sa':
        return 'space-around';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';

      default:
        throw new Error(createError([
          'fs|f-s',
          'fe|f-e',
          'c',
          's',
          's-b|sb',
          's-e|se',
          's-a|sa',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForACValue;
