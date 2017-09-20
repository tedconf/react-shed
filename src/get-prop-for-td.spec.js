import getTD from './get-prop-for-td';

describe('font-style', () => {
  it('should handle underline', () => {
    const actual = getTD('u');
    const expected = 'underline';
    expect(actual).toEqual(expected);
  });
  it('should handle overline', () => {
    const actual = getTD('o');
    const expected = 'overline';
    expect(actual).toEqual(expected);
  });
  it('should handle blink', () => {
    const actual = getTD('b');
    const expected = 'blink';
    expect(actual).toEqual(expected);
  });
  it('should handle line-through', () => {
    const actual = getTD('l-t');
    const expected = 'line-through';
    expect(actual).toEqual(expected);
  });
  it('should handle none', () => {
    const actual = getTD('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getTD('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getTD('foo');
    expect(actual).toThrow(/foo/);
  });
});
