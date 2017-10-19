import omit from 'ramda/src/omit';
import type from 'ramda/src/type';
import keys from 'ramda/src/keys';
import reduce from 'ramda/src/reduce';
import evolve from 'ramda/src/evolve';
import compose from 'ramda/src/compose';
import sizes from './sizes';

const createTheme = (
  userTheme = {
    sizes: 'major second',
    steps: 20,
    colors: {
      black: '#000000',
      white: '#ffffff',
      cyan: 'cyan',
      magenta: 'magenta',
      yellow: 'yellow',
    },
    fonts: {
      sans: 'sans-serif',
      serif: 'serif',
      mono: 'monospace',
    },
    mqs: [
      'min-width: 600px',
      'min-width: 960px',
      'min-width: 1200px',
    ],
  },
) => {
  const generatedTheme = {};

  if (userTheme.sizes && type(userTheme.sizes) === 'String') {
    generatedTheme.sizes = sizes(userTheme.sizes, userTheme.steps);
  }

  const getSizesHash = compose(
    evolve({
      z0: '0', // z0 will always be a unitless '0'
    }),
    reduce((acc, curr) => ({
      ...acc,
      [`z${curr}`]: userTheme.sizes[curr],
    })),
    keys,
  );

  if (userTheme.sizes && type(userTheme.sizes) === 'Object') {
    generatedTheme.sizes = getSizesHash(userTheme.sizes);
  }

  if (userTheme.fonts && type(userTheme.fonts) === 'Object') {
    generatedTheme.fonts = userTheme.fonts;
  }

  if (userTheme.fonts && type(userTheme.fonts) !== 'Object') {
    throw new Error(`fonts object must be provided in the format:
      {
        fontName: 'font-family css string',
      }
    `);
  }

  if (userTheme.colors && type(userTheme.colors) === 'Object') {
    generatedTheme.colors = userTheme.colors;
  }

  if (userTheme.colors && type(userTheme.colors) !== 'Object') {
    throw new Error(`colors object must be provided in the format:
      {
        black: '#000000',
        cyan: 'cyan',
      }
    `);
  }

  return {
    ...omit('steps')(userTheme),
    ...generatedTheme,
    sizes: {
      ...omit(['z.0', 'z-0', 'z-.0'])(generatedTheme.sizes),
    },
    mqs: userTheme.mqs,
  };
};

export default createTheme;
