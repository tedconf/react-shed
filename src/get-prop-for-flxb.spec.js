import getFlxB from './get-prop-for-flxb';

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

const flxB = getFlxB(THEME_FIXTURE)

describe('flex-basis', () => {
  it('should handle scale values', () => {
    const actual = flxB('1');
    const expected = '1rem';
    expect(actual).toEqual(expected);
  });
  it('should handle auto', () => {
    const actual = flxB('a');
    const expected = 'auto';
    expect(actual).toEqual(expected);
  });
  it('should handle fill', () => {
    const actual = flxB('f');
    const expected = 'fill';
    expect(actual).toEqual(expected);
  });
  it('should handle max-content', () => {
    const actual = flxB('maxc');
    const expected = 'max-content';
    expect(actual).toEqual(expected);
  });
  it('should handle max-content', () => {
    const actual = flxB('max-c');
    const expected = 'max-content';
    expect(actual).toEqual(expected);
  });
  it('should handle min-content', () => {
    const actual = flxB('minc');
    const expected = 'min-content';
    expect(actual).toEqual(expected);
  });
  it('should handle min-content', () => {
    const actual = flxB('min-c');
    const expected = 'min-content';
    expect(actual).toEqual(expected);
  });
  it('should handle fit-content', () => {
    const actual = flxB('fitc');
    const expected = 'fit-content';
    expect(actual).toEqual(expected);
  });
  it('should handle fit-content', () => {
    const actual = flxB('fit-c');
    const expected = 'fit-content';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = flxB('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should handle content', () => {
    const actual = flxB('c');
    const expected = 'content';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => flxB('foo');
    expect(actual).toThrow(/foo/);
  });
});
