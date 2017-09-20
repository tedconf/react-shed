import getPropsForLH from './get-prop-for-lh';

describe('line-height', () => {
  const THEME_FIXTURE = {
    sizes: {
      ['z-1']: '-1rem',
      ['z.1']: '.9rem',
      z0: '0',
      z1: '1rem',
      z2: '2rem',
      z3: '3rem',
      z4: '4rem',
    }
  };

  const getLH = getPropsForLH(THEME_FIXTURE);

  it('should handle default', () => {
    const actual = getLH('d');
    const expected = '1';
    expect(actual).toEqual(expected);
  });
  it('should handle normal', () => {
    const actual = getLH('n');
    const expected = 'normal';
    expect(actual).toEqual(expected);
  });
  it('should handle tight', () => {
    const actual = getLH('t');
    const expected = '2';
    expect(actual).toEqual(expected);
  });
  it('should handle loose', () => {
    const actual = getLH('1');
    const expected = '1';
    expect(actual).toEqual(expected);
  });
  it('should handle sizes', () => {
    const actual = getLH('-1');
    const expected = '-1';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getLH('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getLH('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});


