import keys from 'ramda/src/keys';
import createTheme from './create-theme';

describe('theme creation', () => {
  const THEME = createTheme({
    sizes: 'minor second',
    steps: 30,
    colors: {
      black: '#111111',
      white: '#efefef',
      cyan: 'blue',
      magenta: 'pink',
      yellow: 'merigold',
    },
    fonts: {
      sans: 'System',
      serif: 'Georgia',
      mono: 'Input',
    },
    mqs: [
      'min-width: 600px',
      'min-width: 960px',
      'min-width: 1200px',
    ],
  });

  it('should return a theme object', () => {
    const actual = keys(THEME);
    const expected = ['sizes', 'colors', 'fonts', 'mqs'];
    expect(actual).toEqual(expected);
  });

  it('should return a generated sizes object', () => {
    const actual = THEME.sizes;
    expect(keys(actual)).toHaveLength(121);
    expect(actual).toMatchSnapshot();
  });

  it('should return a generated colors object', () => {
    const actual = THEME.colors;
    expect(keys(actual)).toHaveLength(5);
    expect(actual).toMatchSnapshot();
  });

  it('should return a generated fonts object', () => {
    const actual = THEME.fonts;
    expect(keys(actual)).toHaveLength(3);
    expect(actual).toMatchSnapshot();
  });

  it('should throw if given invalid font format', () => {
    const actual = () => createTheme({
      fonts: ['dude'],
    });
    expect(actual).toThrow(/format/);
  });

  it('should throw if given invalid color format', () => {
    const actual = () => createTheme({
      colors: ['dude'],
    });
    expect(actual).toThrowError(/format/);
  });
});
