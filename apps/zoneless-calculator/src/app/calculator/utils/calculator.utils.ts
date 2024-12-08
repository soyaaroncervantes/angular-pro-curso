export const transformBooleanValue = (value: boolean | string) =>
  typeof value === 'string' ? value === '' : value;

export const keyEquivalent = new Map<string, string>([
  ['÷', '/'],
  ['⨉', '*'],
  ['Escape', 'C'],
  ['Clear', 'C'],
  ['Enter', '='],
])

export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operators = ['+', '-', '*', '/'];
export const specialOperators = ['C', '+/-', '%', '=', '.', 'Backspace'];

