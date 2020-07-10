"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivCommand = exports.MulCommand = exports.SubCommand = exports.AddCommand = void 0;
var command_1 = require("./command");
var aritmethic_functions_1 = require("./aritmethic-functions");
function AddCommand(value) {
    return new command_1.Command(aritmethic_functions_1.add, aritmethic_functions_1.sub, value);
}
exports.AddCommand = AddCommand;
function SubCommand(value) {
    return new command_1.Command(aritmethic_functions_1.sub, aritmethic_functions_1.add, value);
}
exports.SubCommand = SubCommand;
function MulCommand(value) {
    return new command_1.Command(aritmethic_functions_1.mul, aritmethic_functions_1.div, value);
}
exports.MulCommand = MulCommand;
function DivCommand(value) {
    return new command_1.Command(aritmethic_functions_1.div, aritmethic_functions_1.mul, value);
}
exports.DivCommand = DivCommand;
