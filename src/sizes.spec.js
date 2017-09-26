import sizes from './sizes';

describe('size generation', () => {
  it('should take a scale', () => {
    const actual = sizes('minor second');
    const expected = `${(16 / 15) ** 1}rem`;
    expect(actual.z2).toBe(expected);
  });
  it('should generate the number of values given', () => {
    const actual = sizes('major second', 30);
    expect(Object.keys(actual).indexOf('z30')).toBeGreaterThanOrEqual(0);
    expect(Object.keys(actual).indexOf('z-30')).toBeGreaterThanOrEqual(0);
    expect(Object.keys(actual).indexOf('z31')).toBeLessThan(0);
    expect(Object.keys(actual).indexOf('z-31')).toBeLessThan(0);
  });
  it('should generate dot values for the number of values given', () => {
    const actual = sizes('major second', 30);
    expect(Object.keys(actual).indexOf('z.30')).toBeGreaterThanOrEqual(0);
    expect(Object.keys(actual).indexOf('z-.30')).toBeGreaterThanOrEqual(0);
    expect(Object.keys(actual).indexOf('z.31')).toBeLessThan(0);
    expect(Object.keys(actual).indexOf('z-.31')).toBeLessThan(0);
  });
});

