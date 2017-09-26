import getPropsForLS from './get-prop-for-ls';

describe('letter spacing', () => {
  const THEME_FIXTURE = {
    sizes: {
      'z-1': '-1rem',
      'z.1': '.9rem',
      z0: '0',
      z1: '1rem',
      z2: '2rem',
      z3: '3rem',
      z4: '4rem',
    },
  };

  const getLS = getPropsForLS(THEME_FIXTURE);

  it('should handle normal', () => {
    const actual = getLS('n');
    const expected = 'normal';
    expect(actual).toEqual(expected);
  });
  it('should handle tight', () => {
    const actual = getLS('t');
    const expected = '-0.05em';
    expect(actual).toEqual(expected);
  });
  it('should handle loose', () => {
    const actual = getLS('l');
    const expected = '.3em';
    expect(actual).toEqual(expected);
  });
  it('should handle sizes', () => {
    const actual = getLS('-1');
    const expected = '-1';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getLS('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getLS('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});

