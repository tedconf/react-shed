import curry from 'ramda/src/curry';
import isValid from './is-valid';
import createError from './create-error';
import getSize from './get-size';

const getPropForFlxBValue = (theme, value) => {
  if (isValid('flex-basis')(value)) {
    switch (value) {
      case 'a':
        return 'auto';
      case 'f':
        return 'fill';
      case 'max-c':
        return 'max-content';
      case 'maxc':
        return 'max-content';
      case 'min-c':
        return 'min-content';
      case 'minc':
        return 'min-content';
      case 'fit-c':
        return 'fit-content';
      case 'fitc':
        return 'fit-content';
      case 'c':
        return 'content';
      case 'i':
        return 'inherit';
      case 'init':
        return 'initial';
      default:
        if (getSize(theme, value)) {
          return getSize(theme, value);
        }

        throw new Error(createError([
          'scale value',
          'a',
          'f',
          'max-c',
          'maxc',
          'min-c',
          'minc',
          'fit-c',
          'fitc',
          'c',
          'i',
          'init',
        ])(value));
    }
  }

  return value;
};

export default curry((theme, value) => getPropForFlxBValue(theme, value));
