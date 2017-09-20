import getLST from './get-prop-for-lst';

describe('list-style-type', () => {
  it('should handle none', () => {
    const actual = getLST('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle disc', () => {
    const actual = getLST('d');
    const expected = 'disc';
    expect(actual).toEqual(expected);
  });
  it('should handle circle', () => {
    const actual = getLST('c');
    const expected = 'circle';
    expect(actual).toEqual(expected);
  });
  it('should handle square', () => {
    const actual = getLST('s');
    const expected = 'square';
    expect(actual).toEqual(expected);
  });
  it('should handle decimal', () => {
    const actual = getLST('dec');
    const expected = 'decimal';
    expect(actual).toEqual(expected);
  });
  it('should handle georgian', () => {
    const actual = getLST('g');
    const expected = 'georgian';
    expect(actual).toEqual(expected);
  });
  it('should handle cjk-ideographic', () => {
    const actual = getLST('cjk-i');
    const expected = 'cjk-ideographic';
    expect(actual).toEqual(expected);
  });
  it('should handle kannada', () => {
    const actual = getLST('k');
    const expected = 'kannada';
    expect(actual).toEqual(expected);
  });
  it('should handle a custom value', () => {
    const actual = getLST('•');
    const expected = '•';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getLST('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getLST('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});
