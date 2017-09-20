import isValid from './is-valid';

const getPropForLSTValue = (value = null) => {
  if (isValid('list-style-type')(value)) {
    switch (value) {
      case 'd':
        return 'disc';
      case 'c':
        return 'circle';
      case 's':
        return 'square';
      case 'dec':
        return 'decimal';
      case 'g':
        return 'georgian';
      case 'cjk-i':
        return 'cjk-ideographic';
      case 'k':
        return 'kannada';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      case 'unset':
        return 'unset';
      case 'n':
        return 'none';

      default:
        return value;
    }
  }

  return value;
};

export default getPropForLSTValue;
