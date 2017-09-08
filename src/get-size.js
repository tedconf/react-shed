import compose from 'ramda/src/compose';
import reduce from 'ramda/src/reduce';
import tail from 'ramda/src/tail';
import match from 'ramda/src/match';
import t from 'ramda/src/test';
import path from 'ramda/src/path';
import curry from 'ramda/src/curry';
import type from 'ramda/src/type';

const getSize = (theme, value = null) => {
  if (value) {
    if (value && value.match && value.match(/^\d+v(min|max|h|w)$/)) {
      return value;
    }

    const gridRE = /(\d*)(?:of|\/)(\d*)/;
    if (t(gridRE)(value)) {
      return compose(
        reduce((acc, val) => (acc !== null ? acc / val : val), null),
        tail,
        match(gridRE),
      )(value);
    }

    switch (value) {
      case 'full':
        return '100%';
      case 'a':
        return 'auto';
      default: {
        let formattedVal;
        if (type(value) === 'Number' || type(value) === 'String') {
          formattedVal = parseFloat(value, 10) < 1
            ? value.toString().replace('0.', '.')
            : parseFloat(value, 10).toString() || false;
        }

        const sizeScale = path(['sizes'])(theme);
        const newVal = sizeScale[`z${formattedVal}`];

        try {
          if (newVal.toString()) {
            return newVal;
          }
        } catch (err) {
          throw new Error(`You must provide a valid value for the size prop, not ${JSON.stringify(value)}`);
        }
      }
    }
  }
  return false;
};

export default curry((theme, size) => getSize(theme, size));
