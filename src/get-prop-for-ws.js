import isValid from './is-valid';
import createError from './create-error';

const getPropForWSValue = (value = null) => {
  if (isValid('white-space')(value)) {
    switch (value) {
      case 'n':
        return 'normal';
      case 'nw':
        return 'nowrap';
      case 'p':
        return 'pre';
      case 'pw':
        return 'pre-wrap';
      case 'p-w':
        return 'pre-wrap';
      case 'pl':
        return 'pre-line';
      case 'p-l':
        return 'pre-line';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'n',
          'nw',
          'p',
          'pw|p-w',
          'pl|p-l',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForWSValue;
