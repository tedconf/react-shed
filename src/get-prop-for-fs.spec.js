import getFS from './get-prop-for-fs';

describe('font-style', () => {
  it('should handle normal', () => {
    const actual = getFS('n');
    const expected = 'normal';
    expect(actual).toEqual(expected);
  });
  it('should handle italic', () => {
    const actual = getFS('it');
    const expected = 'italic';
    expect(actual).toEqual(expected);
  });
  it('should handle oblique', () => {
    const actual = getFS('o');
    const expected = 'oblique';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getFS('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getFS('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getFS('foo');
    expect(actual).toThrow(/foo/);
  });
});
