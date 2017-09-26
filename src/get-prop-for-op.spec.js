import getOp from './get-prop-for-op';

describe('opacity', () => {
  it('should handle .5', () => {
    const actual = getOp('.5');
    const expected = '.5';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getOp('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getOp('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getOp('foo');
    expect(actual).toThrow(/foo/);
  });
});
