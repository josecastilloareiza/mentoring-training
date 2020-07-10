"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        throw new Error('Both arguments must be numbers');
    }
}
exports.add = add;
function sub(x, y) {
    return x - y;
}
exports.sub = sub;
function mul(x, y) {
    return x * y;
}
exports.mul = mul;
function div(x, y) {
    return x / y;
}
exports.div = div;
