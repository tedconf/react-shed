import getAI from './get-prop-for-ai';

describe('align-items', () => {
  it('should handle flex-start', () => {
    const actual = getAI('f-s');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-start', () => {
    const actual = getAI('fs');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getAI('fe');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getAI('f-e');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle center', () => {
    const actual = getAI('c');
    const expected = 'center';
    expect(actual).toEqual(expected);
  });
  it('should handle baseline', () => {
    const actual = getAI('b');
    const expected = 'baseline';
    expect(actual).toEqual(expected);
  });
  it('should handle stretch', () => {
    const actual = getAI('s');
    const expected = 'stretch';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getAI('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getAI('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getAI('foo');
    expect(actual).toThrow(/foo/);
  });
});
