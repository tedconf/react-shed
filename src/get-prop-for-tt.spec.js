import getTT from './get-prop-for-tt';

describe('text-transform', () => {
  it('should handle uppercase', () => {
    const actual = getTT('u');
    const expected = 'uppercase';
    expect(actual).toEqual(expected);
  });
  it('should handle lowercase', () => {
    const actual = getTT('l');
    const expected = 'lowercase';
    expect(actual).toEqual(expected);
  });
  it('should handle capitalize', () => {
    const actual = getTT('c');
    const expected = 'capitalize';
    expect(actual).toEqual(expected);
  });
  it('should handle none', () => {
    const actual = getTT('n');
    const expected = 'none';
    expect(actual).toEqual(expected);
  });
  it('should handle inherit', () => {
    const actual = getTT('i');
    const expected = 'inherit';
    expect(actual).toEqual(expected);
  });
  it('should handle initial', () => {
    const actual = getTT('init');
    const expected = 'initial';
    expect(actual).toEqual(expected);
  });
});

