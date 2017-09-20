import isValid from './is-valid';
import createError from './create-error';

const getPropForOValue = (value = null) => {
  if (isValid('overflow')(value)) {
    switch (value) {
      case 'a':
        return 'auto';
      case 'h':
        return 'hidden';
      case 's':
        return 'scroll';
      case 'v':
        return 'visible';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'a',
          'h',
          's',
          'v',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForOValue;
