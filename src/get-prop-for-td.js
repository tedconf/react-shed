import isValid from './is-valid';
import createError from './create-error';

const getPropForTDValue = (value = null) => {
  if (isValid('text-decoration')(value)) {
    switch (value) {
      case 'u':
        return 'underline';
      case 'o':
        return 'overline';
      case 'b':
        return 'blink';
      case 'l-t':
        return 'line-through';
      case 'lt':
        return 'line-through';
      case 'n':
        return 'none';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        throw new Error(createError([
          'u',
          'o',
          'b',
          'lt|l-t',
          'n',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropForTDValue;
