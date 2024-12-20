import { TestBed } from '@angular/core/testing';
import { BasicCalculatorBuilder } from './basic-calculator.builder';
import { expect } from '@playwright/test';

interface SetupTest {
  service: BasicCalculatorBuilder;
}

describe('BasicCalculatorBuilderService', () => {
  let sr: SetupTest;
  beforeEach(() => sr = setup());

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
      it('should update resultText ', () => {
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('1');
        sr.service.validateNumber('2');
        expect(sr.service.resultText()).toBe('12');
      });
      it('should set resultText, when resultText is 0', () => {
        expect(sr.service.resultText()).toBe('0');
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('1');
      });
      it('should set resultText, when resultText is -0', () => {
        expect(sr.service.resultText()).toBe('0');
        sr.service.resultText.set('-0');
        sr.service.validateNumber('1');
        expect(sr.service.resultText()).toBe('-1');
      });
    });
  });
  describe('when validateOperators is raised', () => {
    beforeEach(() => sr.service.resultText.set('30'));

    it('should keep default operator, when operator is not included', () => {
      sr.service.validateOperators('(');
      expect(sr.service.lastOperator()).toBe('+');
    });

    it('should update lastOperator, when operator is included', () => {
      sr.service.validateOperators('*');
      expect(sr.service.subResultText()).toBe('30');
      expect(sr.service.resultText()).toBe('0');
      expect(sr.service.lastOperator()).not.toBe('+');
    });
  });
  describe('when validateValue is raised', () => {
    it('should throw error, when value is not included', () => {
      jest.spyOn(console, 'error').mockImplementation();
      expect(() => sr.service.validateValue('(')).toThrow();
    });
  });
});

function setup(): SetupTest {
  const service = TestBed.inject(BasicCalculatorBuilder);
  return { service };
}
