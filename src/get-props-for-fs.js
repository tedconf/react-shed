import isValid from './is-valid';

const getPropsForFSValue = (value = null) => {
  if (isValid('font-style')(value)) {
    switch (value) {
      case 'n':
        return 'normal';
      case 'i':
        return 'italic';
      case 'o':
        return 'oblique';
      case 'inh':
        return 'inherit';
      case 'init':
        return 'inherit';
      default:
        throw new Error(`You must provide a valid value for the font-style prop. One of n, i, o, i, init, not ${JSON.stringify(value)}`);
    }
  }

  return value;
};

export default getPropsForFSValue;
