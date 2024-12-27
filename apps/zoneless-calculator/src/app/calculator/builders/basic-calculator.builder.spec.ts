import { TestBed } from '@angular/core/testing';
import { BasicCalculatorBuilder } from './basic-calculator.builder';

interface SetupTest {
  service: BasicCalculatorBuilder;
}

describe('BasicCalculatorBuilderService', () => {
  let sr: SetupTest;
  beforeEach(() => (sr = setup()));
  afterEach(() => jest.clearAllMocks());

  it('should be created', () => expect(sr.service).toBeTruthy());
  it('should signal have default value', () => {
    expect(sr.service.resultText()).toBe('0');
    expect(sr.service.subResultText()).toBe('0');
    expect(sr.service.lastOperator()).toBe('+');
  });
  it('should reset values, when reset is raised', () => {
    sr.service.resultText.set('12');
    sr.service.subResultText.set('2');
    sr.service.lastOperator.set('*');
    sr.service.reset();
    expect(sr.service.resultText()).toBe('0');
    expect(sr.service.subResultText()).toBe('0');
    expect(sr.service.lastOperator()).toBe('+');
  });
  describe('when validateNumber is raised', () => {
    it('should return if value is empty', () => {
      sr.service.validateNumber('');
      expect(sr.service.resultText()).toBe('0');
    });
    it('should return when value is zero, and resultText is zero', () => {
      sr.service.validateNumber('0');
      expect(sr.service.resultText()).toBe('0');
      sr.service.resultText.set('-0');
      sr.service.validateNumber('0');
      expect(sr.service.resultText()).toBe('-0');
    });
    describe('when value includes a number', () => {
      beforeEach(() => sr.service.resultText.set('0'));

      it('should set resultText, when resultText is 0', () => {
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('1');
        sr.service.validateNumber('2');
        sr.service.validateNumber('3');
        expect(sr.service.resultText()).toBe('123');
      });
      it('should set resultText, when resultText is -0', () => {
        sr.service.resultText.set('-0');
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('-1');
        sr.service.validateNumber('2');
        sr.service.validateNumber('3');
        expect(sr.service.resultText()).toBe('-123');
      });
      it('should update resultText ', () => {
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('1');
        sr.service.validateNumber('2');
        sr.service.validateNumber('3');
        expect(sr.service.resultText()).toBe('123');
      });
    });
  });
  describe('when validateOperators is raised', () => {
    beforeEach(() => sr.service.resultText.set('30'));

    it('should keep default operator, when operator is not included', () => {
      sr.service.validateOperators('(');
      expect(sr.service.lastOperator()).toBe('+');
      sr.service.validateOperators('*');
      expect(sr.service.lastOperator()).toBe('*');
      sr.service.validateOperators('(');
      expect(sr.service.lastOperator()).not.toBe('+');
      expect(sr.service.lastOperator()).toBe('*');
    });

    it('should update lastOperator, when operator is included', () => {
      sr.service.validateOperators('*');
      expect(sr.service.subResultText()).toBe('30');
      expect(sr.service.resultText()).toBe('0');
      expect(sr.service.lastOperator()).not.toBe('+');
      sr.service.validateOperators('-');
      expect(sr.service.lastOperator()).toBe('-');
      expect(sr.service.resultText()).toBe('0');
      expect(sr.service.subResultText()).toBe('0');
    });
  });
  describe('when validateValue is raised', () => {
    it('should throw error, when value is not included', () => {
      jest.spyOn(console, 'error').mockImplementation();
      expect(() => sr.service.validateValue('(')).toThrow();
    });

    it('should show warning, when resultText raised max length', () => {
      jest.spyOn(console, 'warn').mockImplementation(() => 'warn');
      sr.service.resultText.set('1234567890');
      sr.service.validateValue('1');
      expect(console.warn).toHaveBeenCalled();
    });
  });
  describe('when validateSpecialOperators is raised', () => {
    it('should call calculateResult when value is =', () => {
      const spy = jest.spyOn(sr.service, 'calculateResult');
      sr.service.validateSpecialOperators('=');
      expect(spy).toHaveBeenCalled();
    });
    describe('when value is Backspace', () => {
      afterEach(() => {
        sr.service.validateSpecialOperators('Backspace');
        expect(sr.service.resultText()).toBe('0');
      });

      it('should return when resultText is 0', () => {
        sr.service.validateSpecialOperators('Backspace');
        expect(sr.service.resultText()).toBe('0');
        sr.service.subResultText.set('100');
        sr.service.lastOperator.set('*');
      });

      it('should resultText set to 0, when resultText has 2 characters and a character is -', () =>
        sr.service.resultText.set('-3'));

      it('should resultText set to 0, when resultText has 1 character', () =>
        sr.service.resultText.set('3'));

      it('should slice resultText by 1, when resultText has 2 characters', () => {
        sr.service.resultText.set('-125');
        sr.service.validateSpecialOperators('Backspace');
        expect(sr.service.resultText()).toBe('-12');
        sr.service.validateSpecialOperators('Backspace');
        expect(sr.service.resultText()).toBe('-1');
      });
    });
    describe('when value is +/-', () => {
      beforeEach(() => sr.service.resultText.set('12'));
      it('should add negative sign, when resultText does not contain it', () => {
        sr.service.validateSpecialOperators('+/-');
        expect(sr.service.resultText()).toBe('-12');
      });
      it('should remove negative sign, when resultText contains it', () => {
        sr.service.validateSpecialOperators('+/-');
        expect(sr.service.resultText()).toBe('12');
      });
    })
  });
  describe('when calculateResult is raised', () => {
    beforeEach( () => {
      sr.service.subResultText.set('12');
      sr.service.resultText.set('2');
    })
    afterEach(() => {
      expect(typeof sr.service.resultText()).toBe('string');
      expect(sr.service.subResultText()).toBe('0');
    })
    it('should sum 12 and 2, when lastOperator is +', () => {
      sr.service.lastOperator.set('+');
      sr.service.calculateResult();
      expect(sr.service.resultText()).toBe('14');
    });
    it('should subtract 12 and 2, when lastOperator is -', () => {
      sr.service.lastOperator.set('-');
      sr.service.calculateResult();
      expect(sr.service.resultText()).toBe('10');
    });
    it('should multiply 12 and 2, when lastOperator is *', () => {
      sr.service.lastOperator.set('*');
      sr.service.calculateResult();
      expect(sr.service.resultText()).toBe('24');
    });
    it('should divide 12 and 2, when lastOperator is /', () => {
      sr.service.lastOperator.set('/');
      sr.service.calculateResult();
      expect(sr.service.resultText()).toBe('6');
    });
    it('should result be zero, when lastOperator is not a valid operator', () => {
      sr.service.lastOperator.set('^');
      sr.service.calculateResult();
      expect(sr.service.resultText()).toBe('0');
    });
  });
});

function setup(): SetupTest {
  const service = TestBed.inject(BasicCalculatorBuilder);
  return { service };
}
