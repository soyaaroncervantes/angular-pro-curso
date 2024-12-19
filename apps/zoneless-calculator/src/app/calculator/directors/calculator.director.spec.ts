import { TestBed } from '@angular/core/testing';
import { CalculatorDirector } from './calculator.director';
import { BasicCalculatorBuilder } from '../builders/basic-calculator.builder';

interface SetupTest {
  service: CalculatorDirector;
}

describe('CalculatorDirectorService', () => {
  let sr: SetupTest;
  beforeEach(() => (sr = setup()));

  it('should be created', () => expect(sr.service).toBeTruthy());
  it('should call builder steps, when director call makeSimpleCalculator', () => {

    const builder = TestBed.inject(BasicCalculatorBuilder);

    const validateNumberSpy = jest.spyOn(builder, 'validateNumber');
    const validateOperatorsSpy = jest.spyOn(builder, 'validateOperators');
    const validateSpecialOperatorsSpy = jest.spyOn(builder, 'validateSpecialOperators');
    const validateValueSpy = jest.spyOn(builder, 'validateValue');

    sr.service.makeSimpleCalculator(builder, '1');

    expect(validateNumberSpy).toHaveBeenCalled();
    expect(validateOperatorsSpy).toHaveBeenCalled();
    expect(validateSpecialOperatorsSpy).toHaveBeenCalled();
    expect(validateValueSpy).toHaveBeenCalled();
  });

  function setup(): SetupTest {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(CalculatorDirector);
    return { service };
  }
});
