import getTA from './get-prop-for-ta';

describe('text-align', () => {
  it('should handle center', () => {
    const actual = getTA('c');
    const expected = 'center';
    expect(actual).toEqual(expected);
  });
  it('should handle left', () => {
    const actual = getTA('l');
    const expected = 'left';
    expect(actual).toEqual(expected);
  });
  it('should handle right', () => {
    const actual = getTA('r');
    const expected = 'right';
    expect(actual).toEqual(expected);
  });
  it('should handle justify', () => {
    const actual = getTA('j');
    const expected = 'justify';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getTA('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getTA('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});
