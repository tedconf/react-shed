import isValid from './is-valid';
import createError from './create-error';

const getPropsForVAValue = (value = null) => {
  if (isValid('vertical-align')(value)) {
    switch (value) {
      case 't':
        return {
          verticalAlign: 'top',
        };
      case 'b':
        return {
          verticalAlign: 'bottom',
        };
      case 'm':
        return {
          verticalAlign: 'middle',
        };
      case 'bl':
        return {
          verticalAlign: 'baseline',
        };
      case 'c':
        return {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'i':
        return {
          verticalAlign: 'inherit',
        };
      case 'init':
        return {
          verticalAlign: 'initial',
        };
      default:
        throw new Error(createError([
          't',
          'b',
          'm',
          'bl',
          'c',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default getPropsForVAValue;
