import getPropForJC from './get-prop-for-jc';

describe('justify-content', () => {
  it('should handle flex-start', () => {
    const actual = getPropForJC('f-s');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-start', () => {
    const actual = getPropForJC('fs');
    const expected = 'flex-start';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getPropForJC('fe');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle flex-end', () => {
    const actual = getPropForJC('f-e');
    const expected = 'flex-end';
    expect(actual).toEqual(expected);
  });
  it('should handle space-between', () => {
    const actual = getPropForJC('sb');
    const expected = 'space-between';
    expect(actual).toEqual(expected);
  });
  it('should handle space-between', () => {
    const actual = getPropForJC('s-b');
    const expected = 'space-between';
    expect(actual).toEqual(expected);
  });
  it('should handle space-around', () => {
    const actual = getPropForJC('sa');
    const expected = 'space-around';
    expect(actual).toEqual(expected);
  });
  it('should handle space-around', () => {
    const actual = getPropForJC('s-a');
    const expected = 'space-around';
    expect(actual).toEqual(expected);
  });
  it('should handle space-evenly', () => {
    const actual = getPropForJC('se');
    const expected = 'space-evenly';
    expect(actual).toEqual(expected);
  });
  it('should handle space-evenly', () => {
    const actual = getPropForJC('s-e');
    const expected = 'space-evenly';
    expect(actual).toEqual(expected);
  });
  it('should handle center', () => {
    const actual = getPropForJC('c');
    const expected = 'center';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getPropForJC('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
  it('should throw on something else', () => {
    const actual = () => getPropForJC('foo');
    expect(actual).toThrow(/foo/);
  });
});
