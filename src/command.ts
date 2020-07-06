export class Command {
  execute: object;
  undo: object;
  value: number;

  constructor(execute: object, undo: object, value: number) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}
