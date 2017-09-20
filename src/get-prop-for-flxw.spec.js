import getPropForFlxW from './get-prop-for-flxw';

describe('flex-wrap', () => {
  it('should handle wrap', () => {
    const actual = getPropForFlxW('w');
    const expected = 'wrap';
    expect(actual).toEqual(expected);
  });
  it('should handle no-wrap', () => {
    const actual = getPropForFlxW('nw');
    const expected = 'nowrap';
    expect(actual).toEqual(expected);
  });
  it('should handle wrap-reverse', () => {
    const actual = getPropForFlxW('wr');
    const expected = 'wrap-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle wrap-reverse', () => {
    const actual = getPropForFlxW('w-r');
    const expected = 'wrap-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle i', () => {
    const actual = getPropForFlxW('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle init', () => {
    const actual = getPropForFlxW('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});

