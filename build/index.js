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
