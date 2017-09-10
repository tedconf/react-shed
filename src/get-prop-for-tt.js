import isValid from './is-valid';

const getPropsForTTValue = (value = null) => {
  if (isValid('text-transform')(value)) {
    switch (value) {
      case 'u':
        return 'uppercase';
      case 'c':
        return 'capitalize';
      case 'l':
        return 'lowercase';
      case 'n':
        return 'none';
      case 'i':
        return 'inherit';
      case 'init':
        return 'inherit';
      default:
        throw new Error(`You must provide a valid value for the text-transform prop. One of u, c, l, n, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

export default getPropsForTTValue;
