import isValid from './is-valid';

describe('value validation', () => {
  const test = isValid('test');
  it('should accept strings', () => {
    const actual = test('1px');
    expect(actual).toBe(true);
  });
  it('should accept number', () => {
    const actual = test(1);
    expect(actual).toBe(true);
  });
  it('should reject object', () => {
    const actual = () => test({});
    expect(actual).toThrowError(/\{\}/);
  });
  it('should reject function', () => {
    const actual = () => test(() => void(0));
    expect(actual).toThrowError(/Function/);
  });
});
