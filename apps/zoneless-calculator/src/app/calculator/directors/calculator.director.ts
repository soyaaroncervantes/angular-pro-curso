import { CalculatorBaseBuilder } from '../builders/calculator-base.builder';

export class CalculatorDirector<T> {
  constructor(builder: CalculatorBaseBuilder<T>, value: T) {
    builder.validateValue(value);
    builder.validateSpecialOperators(value);
    builder.validateOperators(value);
    builder.validateNumber(value);
  }
}
