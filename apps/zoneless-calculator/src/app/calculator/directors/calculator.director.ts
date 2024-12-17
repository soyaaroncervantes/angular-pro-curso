import { CalculatorBuilderInterface } from '../builders/calculator-builder.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorDirector {
  makeSimpleCalculator<T>(builder: CalculatorBuilderInterface<T>, value: T) {
    builder.validateValue(value);
    builder.validateSpecialOperators(value);
    builder.validateOperators(value);
    builder.validateNumber(value);
  }
}
