import isValid from './is-valid';
import createError from './create-error';

const getPropForOp = (value = null) => {
  if (isValid('opacity')(value)) {
    switch (value) {
      case 'i': return 'inherit';
      case 'init': return 'initial';
      case 'u': return 'unset';
      default: {
        const parsedVal = parseFloat(value, 10);
        if (isNaN(parsedVal)) {
          throw new Error(createError([
            'a number between 0 & 1',
            'u',
            'i',
            'init',
          ])(value));
        }

        if (!isNaN(parsedVal)) {
          if (parsedVal > 1 || parsedVal < 0) {
            throw new Error(createError([
              'a number between 0 & 1',
              'u',
              'i',
              'init',
            ])(value));
          }
          return value;
        }
      }
    }
  }

  return value;
};

export default getPropForOp;
