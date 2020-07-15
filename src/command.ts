import { Operator } from './operator';

export class Command {
    execute: Operator<number>;
    undo: Operator<number>;
    value: number;

    constructor(execute: Operator<number>, undo: Operator<number>, value: number) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
}
