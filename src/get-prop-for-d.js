import isValid from './is-valid';
import createError from './create-error';

const getPropsForDValue = (value = null) => {
  if (isValid('display')(value)) {
    switch (value) {
      case 'b':
        return 'block';
      case 'i-b':
        return 'inline-block';
      case 'ib':
        return 'inline-block';
      case 'i':
        return 'inline';
      case 'f':
        return 'flex';
      case 'i-f':
        return 'inline-flex';
      case 'if':
        return 'inline-flex';
      case 't':
        return 'table';
      case 't-c':
        return 'table-cell';
      case 'tc':
        return 'table-cell';
      case 't-r':
        return 'table-row';
      case 'tr':
        return 'table-row';
      case 'n':
        return 'none';
      case 'init':
        return 'initial';

      default:
        throw new Error(createError([
          'b|i-b',
          'f',
          'i',
          'i-f|if',
          'init',
          'n',
          't',
          't-c|tc',
          't-r|tr',
        ])(value));
    }
  }

  return value;
};

export default getPropsForDValue;
