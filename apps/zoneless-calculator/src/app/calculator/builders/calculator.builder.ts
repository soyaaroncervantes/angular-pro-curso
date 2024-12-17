export interface CalculatorBuilder<T> {
  calculateResult(): void;
  reset(): void;
  validateNumber(value: T): void;
  validateOperators(value: T): void;
  validateSpecialOperators(value: T): void;
  validateValue(value: T): void;
}
