import getBr from './get-props-for-br';

const THEME_FIXTURE = {
  sizes: {
    'z-1': '-1rem',
    'z.1': '.9rem',
    z0: '0',
    z1: '1rem',
    z2: '2rem',
    z3: '3rem',
    z4: '4rem',
  },
};


describe('border-radius', () => {
  const br = getBr(THEME_FIXTURE);
  it('should handle br props', () => {
    const actual = br({
      br: '1',
    });
    const expected = {
      borderRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brt props', () => {
    const actual = br({
      brt: '1',
    });
    const expected = {
      borderTopLeftRadius: THEME_FIXTURE.sizes.z1,
      borderTopRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brb props', () => {
    const actual = br({
      brb: '1',
    });
    const expected = {
      borderBottomLeftRadius: THEME_FIXTURE.sizes.z1,
      borderBottomRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brl props', () => {
    const actual = br({
      brl: '1',
    });
    const expected = {
      borderBottomLeftRadius: THEME_FIXTURE.sizes.z1,
      borderTopLeftRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brr props', () => {
    const actual = br({
      brr: '1',
    });
    const expected = {
      borderBottomRightRadius: THEME_FIXTURE.sizes.z1,
      borderTopRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brtl props', () => {
    const actual = br({
      brtl: '1',
    });
    const expected = {
      borderTopLeftRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brtr props', () => {
    const actual = br({
      brtr: '1',
    });
    const expected = {
      borderTopRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brbr props', () => {
    const actual = br({
      brbr: '1',
    });
    const expected = {
      borderBottomRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle brbl props', () => {
    const actual = br({
      brbl: '1',
    });
    const expected = {
      borderBottomLeftRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
  it('should handle multiple props', () => {
    const actual = br({
      brbl: '1',
      brtr: '1',
    });
    const expected = {
      borderBottomLeftRadius: THEME_FIXTURE.sizes.z1,
      borderTopRightRadius: THEME_FIXTURE.sizes.z1,
    };
    expect(actual).toEqual(expected);
  });
});
