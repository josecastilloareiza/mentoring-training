export function add(x: number, y: number): number {
  if (areValid(x,y)) {
    return x + y;
  } else {
    throw new Error('Both arguments must be numbers');
  }
}
export function sub(x: number, y: number): number {
  if (areValid(x,y)) {
    return x - y;
  } else {
    throw new Error('Both arguments must be numbers');
  }
}
export function mul(x: number, y: number): number {
  if (areValid(x,y)) {
    return x * y;
  } else {
    throw new Error('Both arguments must be numbers');
  }
}
export function div(x: number, y: number): number {
  if (areValid(x,y)) {
    return x / y;
  } else {
    throw new Error('Both arguments must be numbers');
  }
}

function areValid(x:number, y: number): boolean {
	return (typeof x === 'number' && typeof y === 'number')
}
