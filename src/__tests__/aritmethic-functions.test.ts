window.alert = jest.fn();
import { add } from '../aritmethic-functions';

test('Can sum two positive numbers', () => {
  expect(add(4, 5)).toBe(9);

  expect(add(10000000, 1)).toBe(10000001);

  expect(add(0, 0)).toBe(0);

  expect(add(1, 999999)).toBe(1000000);

  expect(add(4, 35)).toBe(39);
  // 
  // expect(add('4', '35')).toThrowError('Both arguments must be numbers');
});

test('Can sum two negative numbers', () => {
  expect(add(-4, -15)).toBe(-19);
  expect(add(-110000, -110000)).toBe(-220000);
  expect(add(0, 0)).toBe(0);

});

test('Can sum one positive number and one negative number', () => {
  expect(add(4, -35)).toBe(-31);
  expect(add(3000, -3000)).toBe(0);
});
