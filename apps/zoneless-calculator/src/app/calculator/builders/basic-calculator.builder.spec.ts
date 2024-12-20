import { TestBed } from '@angular/core/testing';
import { BasicCalculatorBuilder } from './basic-calculator.builder';

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

  function setup(): SetupTest {
    const service = TestBed.inject(BasicCalculatorBuilder);
    return { service };
  }
});
