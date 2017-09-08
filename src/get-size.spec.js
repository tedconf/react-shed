import getSize from './get-size';

describe('size matching', () => {
  const theme = {
    sizes: {
      ['z0']: '0',
      ['z.1']: '.9rem',
      ['z-1']: '-1.1rem',
      z1: '1.1rem',
    }
  };
  const getThemedSize = getSize(theme);
  it('should return viewport width when given viewport width', () => {
    const actual = getThemedSize('100vw');
    const expected = '100vw';
    expect(actual).toBe(expected);
  });
  it('should return viewport height when given viewport height', () => {
    const actual = getThemedSize('100vh');
    const expected = '100vh';
    expect(actual).toBe(expected);
  });
  it('should return viewport min when given viewport min', () => {
    const actual = getThemedSize('100vmin');
    const expected = '100vmin';
    expect(actual).toBe(expected);
  });
  it('should return viewport max when given viewport max', () => {
    const actual = getThemedSize('100vmax');
    const expected = '100vmax';
    expect(actual).toBe(expected);
  });
  it('should return a decimal given an `of` ratio', () => {
    const actual = getThemedSize('1of12');
    const expected = 1 / 12;
    expect(actual).toBe(expected);
  });
  it('should return a decimal given a `/` ratio', () => {
    const actual = getThemedSize('1/12');
    const expected = 1 / 12;
    expect(actual).toBe(expected);
  });
  it('should return `100%` given `full` keyword', () => {
    const actual = getThemedSize('full');
    const expected = '100%';
    expect(actual).toBe(expected);
  });
  it('should return `auto` given `a` keyword', () => {
    const actual = getThemedSize('a');
    const expected = 'auto';
    expect(actual).toBe(expected);
  });
  it('should return a scale value', () => {
    const actual = getThemedSize('1');
    const expected = '1.1rem';
    expect(actual).toBe(expected);
  });
  it('should return a scale value for negative numbers', () => {
    const actual = getThemedSize('-1');
    const expected = '-1.1rem';
    expect(actual).toBe(expected);
  });
  it('should return a scale value for numbers below 1 on the scale', () => {
    const actual = getThemedSize('.1');
    const expected = '.9rem';
    expect(actual).toBe(expected);
  });
  it('should return a scale value for `0`', () => {
    const actual = getThemedSize('0');
    const expected = '0';
    expect(actual).toBe(expected);
  });
  it('should not accept other values', () => {
    const actual = () => getThemedSize('foo');
    expect(actual).toThrowError(/foo/);
  });
});


