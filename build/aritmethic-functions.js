"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
function areValid(x, y) {
    return typeof x === 'number' && typeof y === 'number';
}
function add(x, y) {
    if (areValid(x, y)) {
        return x + y;
    }
    else {
        throw new Error('Both arguments must be numbers');
    }
}
exports.add = add;
function sub(x, y) {
    if (areValid(x, y)) {
        return x - y;
    }
    else {
        throw new Error('Both arguments must be numbers');
    }
}
exports.sub = sub;
function mul(x, y) {
    if (areValid(x, y)) {
        return x * y;
    }
    else {
        throw new Error('Both arguments must be numbers');
    }
}
exports.mul = mul;
function div(x, y) {
    if (areValid(x, y)) {
        return x / y;
    }
    else {
        throw new Error('Both arguments must be numbers');
    }
}
exports.div = div;
