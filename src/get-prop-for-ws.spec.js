import getWS from './get-prop-for-ws';

describe('whitespace', () => {
  it('should handle normal', () => {
    const actual = getWS('n');
    const expected = 'normal';
    expect(actual).toEqual(expected);
  });
  it('should handle nowrap', () => {
    const actual = getWS('nw');
    const expected = 'nowrap';
    expect(actual).toEqual(expected);
  });
  it('should handle pre', () => {
    const actual = getWS('p');
    const expected = 'pre';
    expect(actual).toEqual(expected);
  });
  it('should handle pre-wrap', () => {
    const actual = getWS('pw');
    const expected = 'pre-wrap';
    expect(actual).toEqual(expected);
  });
  it('should handle pre-wrap', () => {
    const actual = getWS('p-w');
    const expected = 'pre-wrap';
    expect(actual).toEqual(expected);
  });
  it('should handle pre-line', () => {
    const actual = getWS('pl');
    const expected = 'pre-line';
    expect(actual).toEqual(expected);
  });
  it('should handle pre-line', () => {
    const actual = getWS('p-l');
    const expected = 'pre-line';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getWS('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getWS('foo');
    expect(actual).toThrow(/foo/);
  });
});

