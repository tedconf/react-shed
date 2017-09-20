import getCur from './get-prop-for-cur';

describe('cursor', () => {
  it('should handle none', () => {
    const actual = getCur('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle auto', () => {
    const actual = getCur('a');
    const expected = 'auto';
    expect(actual).toEqual(expected);
  });
  it('should handle default', () => {
    const actual = getCur('d');
    const expected = 'default';
    expect(actual).toEqual(expected);
  });
  it('should handle pointer', () => {
    const actual = getCur('p');
    const expected = 'pointer';
    expect(actual).toEqual(expected);
  });
  it('should handle grabbing', () => {
    const actual = getCur('gg');
    const expected = 'grabbing';
    expect(actual).toEqual(expected);
  });
  it('should handle grab', () => {
    const actual = getCur('g');
    const expected = 'grab';
    expect(actual).toEqual(expected);
  });
  it('should handle not-allowed', () => {
    const actual = getCur('na');
    const expected = 'not-allowed';
    expect(actual).toEqual(expected);
  });
  it('should handle not-allowed', () => {
    const actual = getCur('n-a');
    const expected = 'not-allowed';
    expect(actual).toEqual(expected);
  });
  it('should handle help', () => {
    const actual = getCur('h');
    const expected = 'help';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getCur('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should handle any other value', () => {
    const actual = getCur('url(http://www.pngmart.com/files/1/Kitchen-Knife-Transparent-PNG.png)');
    const expected = 'url(http://www.pngmart.com/files/1/Kitchen-Knife-Transparent-PNG.png)';
    expect(actual).toEqual(expected);
  });
});
