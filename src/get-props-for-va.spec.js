import getPropsForVA from './get-props-for-va';

describe('vertical alignment', () => {
  it('should handle middle', () => {
    const actual = getPropsForVA('m');
    const expected = { verticalAlign: 'middle' };
    expect(actual).toEqual(expected);
  });
  it('should handle top', () => {
    const actual = getPropsForVA('t');
    const expected = { verticalAlign: 'top' };
    expect(actual).toEqual(expected);
  });
  it('should handle bottom', () => {
    const actual = getPropsForVA('b');
    const expected = { verticalAlign: 'bottom' };
    expect(actual).toEqual(expected);
  });
  it('should handle baseline', () => {
    const actual = getPropsForVA('bl');
    const expected = { verticalAlign: 'baseline' };
    expect(actual).toEqual(expected);
  });
  it('should handle center', () => {
    const actual = getPropsForVA('c');
    const expected = {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    };
    expect(actual).toEqual(expected);
  });
  it('should handle i', () => {
    const actual = getPropsForVA('i');
    const expected = {
      verticalAlign: 'inherit',
    };
    expect(actual).toEqual(expected);
  });
  it('should handle init', () => {
    const actual = getPropsForVA('init');
    const expected = {
      verticalAlign: 'initial',
    };
    expect(actual).toEqual(expected);
  });
});

