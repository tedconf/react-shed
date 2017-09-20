import getColor from './get-prop-for-color';

describe('color', () => {
  const THEME_FIXTURE = {
    sizes: {
      ['z-1']: '-1rem',
      ['z.1']: '.9rem',
      z0: '0',
      z1: '1rem',
      z2: '2rem',
      z3: '3rem',
      z4: '4rem',
    },
    colors: {
      red: '#FF3D1E',
    },
  };
  const c = getColor(THEME_FIXTURE);
  it('handles currentColor', () => {
    const actual = c('currentColor');
    const expected = 'currentColor';
    expect(actual).toBe(expected);
  });
  it('handles transparent', () => {
    const actual = c('transparent');
    const expected = 'transparent';
    expect(actual).toBe(expected);
  });
  it('handles inherit', () => {
    const actual = c('i');
    const expected = 'inherit';
    expect(actual).toBe(expected);
  });
  it('handles theme colors', () => {
    const actual = c('red');
    const expected = '#FF3D1E';
    expect(actual).toBe(expected);
  });
  it('handles theme color alpha', () => {
    const actual = c('red.5');
    const expected = 'rgba(255, 61, 30, 0.5)';
    expect(actual).toBe(expected);
  });
});
