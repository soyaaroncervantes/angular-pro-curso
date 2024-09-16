export const transformBooleanValue = (value: boolean | string) =>
  typeof value === 'string' ? value === '' : value;
