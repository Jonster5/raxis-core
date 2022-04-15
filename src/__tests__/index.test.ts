import { testFunc } from '../index';

it('should return test if true', () => {
  expect(testFunc(true)).toBe('test');
});

it('should return not test if false', () => {
  expect(testFunc(false)).toBe('not test');
});
