import getPropForFlxD from './get-prop-for-flxd';

describe('flex-direction', () => {
  it('should handle row', () => {
    const actual = getPropForFlxD('r');
    const expected = 'row';
    expect(actual).toEqual(expected);
  });
  it('should handle row-reverse', () => {
    const actual = getPropForFlxD('rr');
    const expected = 'row-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle row-reverse', () => {
    const actual = getPropForFlxD('r-r');
    const expected = 'row-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle column', () => {
    const actual = getPropForFlxD('c');
    const expected = 'column';
    expect(actual).toEqual(expected);
  });
  it('should handle column-reverse', () => {
    const actual = getPropForFlxD('cr');
    const expected = 'column-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle column-reverse', () => {
    const actual = getPropForFlxD('c-r');
    const expected = 'column-reverse';
    expect(actual).toEqual(expected);
  });
  it('should handle i', () => {
    const actual = getPropForFlxD('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle init', () => {
    const actual = getPropForFlxD('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});
