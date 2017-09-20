import getPropForFl from './get-prop-for-fl';

describe('flex-wrap', () => {
  it('should handle left', () => {
    const actual = getPropForFl('l');
    const expected = 'left';
    expect(actual).toEqual(expected);
  });
  it('should handle right', () => {
    const actual = getPropForFl('r');
    const expected = 'right';
    expect(actual).toEqual(expected);
  });
  it('should handle none', () => {
    const actual = getPropForFl('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle i', () => {
    const actual = getPropForFl('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle init', () => {
    const actual = getPropForFl('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});


