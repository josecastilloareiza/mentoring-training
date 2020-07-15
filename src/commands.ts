import { Command } from './command';
import { add, sub, mul, div } from './aritmethic-functions';

export function AddCommand(value: number): Command {
    return new Command(add, sub, value);
}

export function SubCommand(value: number): Command {
    return new Command(sub, add, value);
}

export function MulCommand(value: number): Command {
    return new Command(mul, div, value);
}

export function DivCommand(value: number): Command {
    return new Command(div, mul, value);
}
