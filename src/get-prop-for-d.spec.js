import getD from './get-prop-for-d';

describe('display', () => {
  it('should handle block', () => {
    const actual = getD('b');
    const expected = 'block';
    expect(actual).toEqual(expected);
  });
  it('should handle inline-block', () => {
    const actual = getD('i-b');
    const expected = 'inline-block';
    expect(actual).toEqual(expected);
  });
  it('should handle inline-block shorthand', () => {
    const actual = getD('ib');
    const expected = 'inline-block';
    expect(actual).toEqual(expected);
  });
  it('should handle inline', () => {
    const actual = getD('i');
    const expected = 'inline';
    expect(actual).toEqual(expected);
  });
  it('should handle flex', () => {
    const actual = getD('f');
    const expected = 'flex';
    expect(actual).toEqual(expected);
  });
  it('should handle table', () => {
    const actual = getD('t');
    const expected = 'table';
    expect(actual).toEqual(expected);
  });
  it('should handle table-cell', () => {
    const actual = getD('t-c');
    const expected = 'table-cell';
    expect(actual).toEqual(expected);
  });
  it('should handle table-cell shorthand', () => {
    const actual = getD('tc');
    const expected = 'table-cell';
    expect(actual).toEqual(expected);
  });
  it('should handle table-row', () => {
    const actual = getD('t-r');
    const expected = 'table-row';
    expect(actual).toEqual(expected);
  });
  it('should handle table-row shorthand', () => {
    const actual = getD('tr');
    const expected = 'table-row';
    expect(actual).toEqual(expected);
  });
  it('should handle none', () => {
    const actual = getD('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getD('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getD('foo');
    expect(actual).toThrow(/foo/);
  });
});

