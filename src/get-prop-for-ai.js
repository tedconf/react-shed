import isValid from './is-valid';
import createError from './create-error';

const getPropsForAIValue = (value = null) => {
  if (isValid('align-items')(value)) {
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
          'f-s|fs',
          'f-e|fe',
          'c',
          'b',
          's',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForAIValue;
