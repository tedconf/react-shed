import ms from 'modularscale';
import curry from 'ramda/src/curry';

const sizes = (
  scale = 'major second',
  number = 20,
) => Array.from([...Array(number + 1)])
  .reduce(
    (acc, curr, i) => ({
      ...acc,
      [`z${i}`]: `${ms((i - 1), scale)}rem`,
      [`z.${number - i}`]: `${ms((i - number), scale)}rem`,
      z0: 0,
      [`z-${i}`]: `-${ms((i - 1), scale)}rem`,
      [`z-.${number - i}`]: `-${ms((i - number), scale)}rem`,
    }),
    {},
  );

export default curry(sizes);
