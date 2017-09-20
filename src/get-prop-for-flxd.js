import isValid from './is-valid';
import createError from './create-error';

const getPropForFlxDValue = (value = null) => {
  if (isValid('flex-direction')(value)) {
    switch (value) {
      case 'r':
        return 'row';
      case 'r-r':
        return 'row-reverse';
      case 'rr':
        return 'row-reverse';
      case 'c':
        return 'column';
      case 'c-r':
        return 'column-reverse';
      case 'cr':
        return 'column-reverse';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';

      default:
        throw new Error(createError([
          'r',
          'rr|r-r',
          'c',
          'cr|c-r',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForFlxDValue;
