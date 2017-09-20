import curry from 'ramda/src/curry';
import type from 'ramda/src/type';
import compose from 'ramda/src/compose';
import not from 'ramda/src/not';
import equals from 'ramda/src/equals';
import anyPass from 'ramda/src/anyPass';

const isValid = (label, val) => {
  if (val) {
    const isValidType = compose(
      not,
      anyPass([
        equals('String'),
        equals('Number'),
        equals('Null'),
      ]),
    );

    if (isValidType(type(val))) {
      throw new Error(
        `You must provide a valid value for the ${label ? `${label} ` : ''}prop, one of:
          ✅  number
          ✅  string

        you provided:
          ❌  ${JSON.stringify(val)} (${type(val)})}`,
      );
    }

    return true;
  }
  return false;
};

export default curry((label, val) => isValid(label, val));
