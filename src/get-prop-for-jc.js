import isValid from './is-valid';
import createError from './create-error';

const getPropForJCValue = (value = null) => {
  if (isValid('justify-content')(value)) {
    switch (value) {
      case 'fs':
        return 'flex-start';
      case 'f-s':
        return 'flex-start';
      case 'fe':
        return 'flex-end';
      case 'f-e':
        return 'flex-end';
      case 'c':
        return 'center';
      case 'sb':
        return 'space-between';
      case 's-b':
        return 'space-between';
      case 'se':
        return 'space-evenly';
      case 's-e':
        return 'space-evenly';
      case 'sa':
        return 'space-around';
      case 's-a':
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
          'sb|s-b',
          'se|s-e',
          'sa|s-a',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForJCValue;
