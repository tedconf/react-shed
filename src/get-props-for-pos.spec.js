import getPos from './get-props-for-pos';

describe('position', () => {
  it('should handle fixed', () => {
    const actual = getPos('f');
    const expected = { position: 'fixed' };
    expect(actual).toEqual(expected);
  });
  it('should handle absolute', () => {
    const actual = getPos('a');
    const expected = { position: 'absolute' };
    expect(actual).toEqual(expected);
  });
  it('should handle relative', () => {
    const actual = getPos('r');
    const expected = { position: 'relative' };
    expect(actual).toEqual(expected);
  });
  it('should handle static', () => {
    const actual = getPos('s');
    const expected = { position: 'static' };
    expect(actual).toEqual(expected);
  });
  it('should handle sticky', () => {
    const actual = getPos('stick');
    const expected = { position: 'sticky' };
    expect(actual).toEqual(expected);
  });
  it('should handle cover', () => {
    const actual = getPos('c');
    const expected = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getPos('init');
    const expected = { position: 'initial' };
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getPos('i');
    const expected = { position: 'inherit' };
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getPos('foo');
    expect(actual).toThrow(/foo/);
  });
});

