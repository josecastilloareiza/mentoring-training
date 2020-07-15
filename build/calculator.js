"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(screenLog) {
        var _this = this;
        this.current = 0;
        this.commands = [];
        this.action = function (command) {
            var name = command.execute.toString().substr(9, 3);
            return name.charAt(0).toUpperCase() + name.slice(1);
        };
        this.execute = function (command) {
            _this.current = command.execute(_this.current, command.value);
            _this.commands.push(command);
            _this.screenLog.add(_this.action(command) + " : " + command.value);
        };
        this.undo = function () {
            var command = _this.commands.pop();
            _this.current = command.undo(_this.current, command.value);
            _this.screenLog.add("Undo " + _this.action(command) + ": " + command.value);
        };
        this.getCurrentValue = function () {
            return _this.current;
        };
        this.screenLog = screenLog;
    }
    return Calculator;
}());
exports.Calculator = Calculator;
