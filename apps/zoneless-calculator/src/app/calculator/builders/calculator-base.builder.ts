export abstract class CalculatorBaseBuilder<T> {
  abstract calculateResult(): void;
  abstract reset(): void;
  abstract validateNumber(value: T): void;
  abstract validateOperators(value: T): void;
  abstract validateSpecialOperators(value: T): void;
  abstract validateValue(value: T): void;
}
