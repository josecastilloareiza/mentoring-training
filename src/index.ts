import { Command } from './command';
import { ScreenLog } from './screen-log';
import { AddCommand, SubCommand, MulCommand, DivCommand } from './commands';

function run(): void {
  const screenLog = new ScreenLog();
  const calculator = new Calculator(screenLog);

  // issue commands

  calculator.execute(AddCommand(100));
  calculator.execute(SubCommand(24));
  calculator.execute(MulCommand(6));
  calculator.execute(DivCommand(2));

  // reverse last two commands

  calculator.undo();
  calculator.undo();

  screenLog.add('\nValue: ' + calculator.getCurrentValue());
  screenLog.show();
}

run();
