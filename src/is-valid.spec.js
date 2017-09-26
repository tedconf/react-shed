import isValid from './is-valid';

describe('value validation', () => {
  const test = isValid('test');
  it('should accept strings', () => {
    const actual = test('1px');
    expect(actual).toBe(true);
  });
  it('should accept number', () => {
    const actual = isValid(1);
    expect(actual).toBe(true);
  });
  it('should reject object', () => {
    const actual = () => isValid({});
    expect(actual).toThrowError(/\{\}/);
  });
  it('should reject function', () => {
    const actual = () => isValid(() => undefined);
    expect(actual).toThrowError(/Function/);
  });
});
