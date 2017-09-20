import isValid from './is-valid';

const getPropsForCurValue = (value = null) => {
  if (isValid('cursor')(value)) {
    switch (value) {
      case 'h':
        return 'help';
      case 'n-a':
        return 'not-allowed';
      case 'na':
        return 'not-allowed';
      case 'g':
        return 'grab';
      case 'gg':
        return 'grabbing';
      case 'p':
        return 'pointer';
      case 'd':
        return 'default';
      case 'a':
        return 'auto';
      case 'n':
        return 'none';
      case 'init':
        return 'initial';
      default:
        return value;
    }
  }

  return value;
};

export default getPropsForCurValue;
