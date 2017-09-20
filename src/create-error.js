import compose from 'ramda/src/compose';
import curry from 'ramda/src/curry';
import map from 'ramda/src/map';
import join from 'ramda/src/join';

const getGoodValue = good => `✅  ${good}`;
const getBadValue = bad => `❌  ${JSON.stringify(bad)}`;

/* eslint-disable indent */
const createError = (allowed = [], value) => `
You must provide a valid value for the display prop. One of:
${compose(
  join('\n'),
  map(getGoodValue),
)(allowed)}

you provided:
  ${getBadValue(value)}
`;
/* eslint-enable indent */

export default curry((allowed, value) => createError(allowed, value));
