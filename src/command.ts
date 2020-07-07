import { Operator } from './aritmethic-functions';

export class Command {
  execute: Operator;
  undo: Operator;
  value: number;

  constructor(execute: Operator, undo: Operator, value: number) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}
