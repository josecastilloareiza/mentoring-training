"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
    return Command;
}());
exports.Command = Command;
