export const transformBooleanValue = (value: boolean | string) =>
  typeof value === 'string' ? value === '' : value;

export const keyEquivalent = new Map<string, string>([
  ['÷', '/'],
  ['⨉', '*'],
  ['Escape', 'C'],
  ['Clear', 'C'],
  ['Enter', '='],
])
