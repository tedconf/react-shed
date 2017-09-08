import curry from 'ramda/src/curry';
import type from 'ramda/src/type';
import compose from 'ramda/src/compose';
import not from 'ramda/src/not';
import equals from 'ramda/src/equals';
import anyPass from 'ramda/src/anyPass';

const isValid = (label, val) => {
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
      `You must provide a valid value for the ${label ? `${label} ` : ''}prop: A number or string, not ${JSON.stringify(val)} (${type(val)})`,
    );
  }

  return true;
};

export default curry(isValid);