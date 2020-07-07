window.alert = jest.fn();
import { add } from '../aritmethic-functions';

test('Can sum two positive numbers', () => {
  expect(add(4, 5)).toBe(9);
});

test('Can sum two negative numbers', () => {
  expect(add(-4, -15)).toBe(-19);
});

test('Can sum one positive number and one negative number', () => {
  expect(add(4, -35)).toBe(-31);
});
