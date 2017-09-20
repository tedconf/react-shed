import isValid from './is-valid';
import createError from './create-error';

const getPropForFlValue = (value = null) => {
  if (isValid('float')(value)) {
    switch (value) {
      case 'l':
        return 'left';
      case 'r':
        return 'right';
      case 'n':
        return 'none';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'l',
          'r',
          'n',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForFlValue;
