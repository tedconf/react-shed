import getAC from './get-prop-for-ac';

describe('align-content', () => {
  it('should handle flex-start', () => {
    const actual = getAC('f-s');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-start', () => {
    const actual = getAC('fs');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getAC('fe');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getAC('f-e');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getAC('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getAC('foo');
    expect(actual).toThrow(/foo/);
  });
});

