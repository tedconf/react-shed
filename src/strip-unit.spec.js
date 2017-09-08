import stripUnit from './strip-unit';

describe('strip units', () => {
  it('should strip px units', () => {
    const expected = '1';
    const actual = stripUnit('1px');
    expect(actual).toEqual(expected);
  });
  it('should strip em units', () => {
    const expected = '1';
    const actual = stripUnit('1em');
    expect(actual).toEqual(expected);
  });
  it('should strip rem units', () => {
    const expected = '1';
    const actual = stripUnit('1rem');
    expect(actual).toEqual(expected);
  });
  it('should strip pt units', () => {
    const expected = '1';
    const actual = stripUnit('1pt');
    expect(actual).toEqual(expected);
  });
  it('should strip vmin units', () => {
    const expected = '1';
    const actual = stripUnit('1vmin');
    expect(actual).toEqual(expected);
  });
  it('should strip vmax units', () => {
    const expected = '1';
    const actual = stripUnit('1vmax');
    expect(actual).toEqual(expected);
  });
  it('should strip vh units', () => {
    const expected = '1';
    const actual = stripUnit('1vh');
    expect(actual).toEqual(expected);
  });
  it('should strip vw units', () => {
    const expected = '1';
    const actual = stripUnit('1vw');
    expect(actual).toEqual(expected);
  });
  it('should retain non-united values', () => {
    const expected = '1';
    const actual = stripUnit('1');
    expect(actual).toEqual(expected);
  });
});

