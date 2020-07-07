(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
function add(x, y) {
    return x + y;
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

},{}],2:[function(require,module,exports){
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
            _this.screenLog.add(_this.action(command) + ': ' + command.value);
        };
        this.undo = function () {
            var command = _this.commands.pop();
            _this.current = command.undo(_this.current, command.value);
            _this.screenLog.add('Undo ' + _this.action(command) + ': ' + command.value);
        };
        this.getCurrentValue = function () {
            return _this.current;
        };
        this.screenLog = screenLog;
    }
    return Calculator;
}());
exports.Calculator = Calculator;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./aritmethic-functions":1,"./command":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var screen_log_1 = require("./screen-log");
var commands_1 = require("./commands");
var calculator_1 = require("./calculator");
function run() {
    var screenLog = new screen_log_1.ScreenLog();
    var calculator = new calculator_1.Calculator(screenLog);
    // issue commands
    calculator.execute(commands_1.AddCommand(100));
    calculator.execute(commands_1.SubCommand(24));
    calculator.execute(commands_1.MulCommand(6));
    calculator.execute(commands_1.DivCommand(2));
    // reverse last two commands
    calculator.undo();
    calculator.undo();
    screenLog.add('\nValue: ' + calculator.getCurrentValue());
    screenLog.show();
}
run();

},{"./calculator":2,"./commands":4,"./screen-log":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenLog = void 0;
var ScreenLog = /** @class */ (function () {
    function ScreenLog() {
        var _this = this;
        this.log = '';
        this.add = function (msg) {
            _this.log += msg + '\n';
        };
        this.show = function () {
            alert(_this.log);
            _this.log = '';
        };
    }
    return ScreenLog;
}());
exports.ScreenLog = ScreenLog;

},{}]},{},[5]);
