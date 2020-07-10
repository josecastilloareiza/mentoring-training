import { Command } from './command';
import { ScreenLog } from './screen-log';

export class Calculator {
  screenLog: any;
  constructor(screenLog: ScreenLog) {
    this.screenLog = screenLog;
  }
  current = 0;
  commands: Command[] = [];
  action = (command: Command): string => {
    const name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  execute = (command: Command): void => {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
    this.screenLog.add(this.action(command) + ': ' + command.value);
  };

  undo = (): void => {
    const command = <Command>this.commands.pop();
    this.current = command.undo(this.current, command.value);
    this.screenLog.add('Undo ' + this.action(command) + ': ' + command.value);
  };

  getCurrentValue = (): number => {
    return this.current;
  };
}
