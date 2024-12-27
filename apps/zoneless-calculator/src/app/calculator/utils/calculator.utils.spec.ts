import { transformBooleanValue } from './calculator.utils';

describe('CalculatorUtils', () => {
  describe('when transformBooleanValue is raised', () => {
    it('should return false, when value is not a string', () => {
      let value = transformBooleanValue(false);
      expect(value).toBeFalsy();
      value = transformBooleanValue(true);
      expect(value).toBeTruthy();
    });
    it('should return false, when value is not a empty string', () => {
      const value = transformBooleanValue('asd');
      expect(value).toBeFalsy();
    });
    it('should return true, when value is an empty string', () => {
      const value = transformBooleanValue('');
      expect(value).toBeTruthy();
    });
  });
});
