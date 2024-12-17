import { CalculatorBuilder } from '../builders/calculator.builder';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorDirector {
  makeSimpleCalculator<T>(builder: CalculatorBuilder<T>, value: T) {
    builder.validateValue(value);
    builder.validateSpecialOperators(value);
    builder.validateOperators(value);
    builder.validateNumber(value);
  }
}
