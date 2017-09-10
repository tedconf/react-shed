import isValid from './is-valid';

const getPropsForTAValue = (value = null) => {
  if (isValid('text-align')(value)) {
    switch (value) {
      case 'c':
        return 'center';
      case 'l':
        return 'left';
      case 'r':
        return 'right';
      case 'j':
        return 'justify';
      default:
        throw new Error(`You must provide a valid value for the text-align prop. One of c, l, r, j, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

export default getPropsForTAValue;
