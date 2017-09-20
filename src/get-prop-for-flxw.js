import isValid from './is-valid';
import createError from './create-error';

const getPropForFlxWValue = (value = null) => {
  if (isValid('flex-wrap')(value)) {
    switch (value) {
      case 'nw':
        return 'nowrap';
      case 'w':
        return 'wrap';
      case 'wr':
        return 'wrap-reverse';
      case 'w-r':
        return 'wrap-reverse';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';

      default:
        throw new Error(createError([
          'w',
          'nw|n-w',
          'wr|w-r',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForFlxWValue;
