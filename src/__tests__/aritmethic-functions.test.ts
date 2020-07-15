import { add, sub, div, mul } from '../aritmethic-functions';

window.alert = jest.fn();

test('Can sum two positive numbers', () => {
    expect(add(4, 5)).toEqual(9);
    expect(add(0, 0)).toEqual(0);
    expect(add(4, 35)).toEqual(39);
});

test('Can sum two negative numbers', () => {
    expect(add(-4, -15)).toEqual(-19);
    expect(add(-110000, -110000)).toEqual(-220000);
    expect(add(0, 0)).toEqual(0);
});

test('Can sum one positive number and one negative number', () => {
    expect(add(4, -35)).toEqual(-31);
    expect(add(3000, -3000)).toEqual(0);
    expect(add(1000, -3000)).toEqual(-2000);
});

test('Can substract two positive numbers', () => {
    expect(sub(4, 5)).toEqual(-1);
    expect(sub(0, 0)).toEqual(0);
    expect(sub(4, 35)).toEqual(-31);
});

test('Can substract two negative numbers', () => {
    expect(sub(-4, -15)).toEqual(11);
    expect(sub(-110000, -110000)).toEqual(0);
    expect(sub(0, 0)).toEqual(0);
});

test('Can substract one positive number and one negative number', () => {
    expect(sub(4, -35)).toEqual(39);
    expect(sub(3000, -3000)).toEqual(6000);
    expect(sub(1000, -3000)).toEqual(4000);
});

test('Can divide two positive numbers', () => {
    expect(div(4, 5)).toEqual(0.8);
    expect(div(0.3, 0.1)).toBeCloseTo(3);
    expect(div(0, 276876876)).toEqual(0);
});

test('Can divide two negative numbers', () => {
    expect(div(-4, -5)).toEqual(0.8);
    expect(div(-0.3, -0.1)).toBeCloseTo(3);
    expect(div(-1, -276876876)).toBeCloseTo(0);
});

test('Can divide one positive number and one negative number', () => {
    expect(div(4, -5)).toEqual(-0.8);
    expect(div(0.3, -0.1)).toBeCloseTo(-3);
    expect(div(1, -276876876)).toBeCloseTo(0);
});

test('Can multiply two positive numbers', () => {
    expect(mul(4, 5)).toEqual(20);
    expect(mul(0.3, 0.1)).toBeCloseTo(0.03);
    expect(mul(0, 276876876)).toEqual(0);
});

test('Can multiply two negative numbers', () => {
    expect(mul(-4, -5)).toEqual(20);
    expect(mul(-0.3, -0.1)).toBeCloseTo(0.03);
    expect(mul(-1, -276876876)).toBeCloseTo(276876876);
});

test('Can multiply one positive number and one negative number', () => {
    expect(mul(4, -5)).toEqual(-20);
    expect(mul(0.3, -0.1)).toBeCloseTo(-0.03);
    expect(mul(1, -276876876)).toBeCloseTo(-276876876);
});
