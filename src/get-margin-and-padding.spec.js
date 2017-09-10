import getMarginAndPadding from './get-margin-and-padding';

const THEME_FIXTURE = {
  sizes: {
    ['z-1']: '-1rem',
    ['z.1']: '.9rem',
    z0: '0',
    z1: '1rem',
    z2: '2rem',
    z3: '3rem',
  }
}

describe('margin and padding prop handling', () => {
  const mp = getMarginAndPadding(THEME_FIXTURE);
  it('should handle margin', () => {
    const actual = mp({ m: '1' });
    const expected = { margin: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-top', () => {
    const actual = mp({ mt: '1' });
    const expected = { marginTop: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-bottom', () => {
    const actual = mp({ mb: '1' });
    const expected = { marginBottom: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-left', () => {
    const actual = mp({ ml: '1' });
    const expected = { marginLeft: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-right', () => {
    const actual = mp({ mr: '1' });
    const expected = { marginRight: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-x', () => {
    const actual = mp({ mx: '1' });
    const expected = {
      marginLeft: '1rem',
      marginRight: '1rem',

    };
    expect(actual).toEqual(expected);
  });
  it('should handle margin-y', () => {
    const actual = mp({ my: '1' });
    const expected = {
      marginTop: '1rem',
      marginBottom: '1rem',

    };
    expect(actual).toEqual(expected);
  });
  it('should handle `auto` value', () => {
    const actual = mp({ m: 'a' });
    const expected = {
      margin: 'auto',
    };
    expect(actual).toEqual(expected);
  })
  it('should handle `release` value', () => {
    const actual = mp({ mx: 'r' });
    const expected = {
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
    };
    expect(actual).toEqual(expected);
  })
  it('should handle padding', () => {
    const actual = mp({ p: '1' });
    const expected = { padding: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-top', () => {
    const actual = mp({ pt: '1' });
    const expected = { paddingTop: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-bottom', () => {
    const actual = mp({ pb: '1' });
    const expected = { paddingBottom: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-left', () => {
    const actual = mp({ pl: '1' });
    const expected = { paddingLeft: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-right', () => {
    const actual = mp({ pr: '1' });
    const expected = { paddingRight: '1rem' };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-x', () => {
    const actual = mp({ px: '1' });
    const expected = {
      paddingLeft: '1rem',
      paddingRight: '1rem',

    };
    expect(actual).toEqual(expected);
  });
  it('should handle padding-y', () => {
    const actual = mp({ py: '1' });
    const expected = {
      paddingTop: '1rem',
      paddingBottom: '1rem',

    };
    expect(actual).toEqual(expected);
  });
  it('should handle `auto` value', () => {
    const actual = mp({ p: 'a' });
    const expected = {
      padding: 'auto',
    };
    expect(actual).toEqual(expected);
  })
});
