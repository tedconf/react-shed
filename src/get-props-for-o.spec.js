import getO from './get-prop-for-o';

describe('overflow', () => {
  it('should handle block', () => {
    const actual = getO('v');
    const expected = 'visible';
    expect(actual).toEqual(expected);
  });
  it('should handle auto', () => {
    const actual = getO('a');
    const expected = 'auto';
    expect(actual).toEqual(expected);
  });
  it('should handle hidden', () => {
    const actual = getO('h');
    const expected = 'hidden';
    expect(actual).toEqual(expected);
  });
  it('should handle scroll', () => {
    const actual = getO('s');
    const expected = 'scroll';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getO('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getO('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getO('foo');
    expect(actual).toThrow(/foo/);
  });
});
