import { CalculatorBuilderInterface } from './calculator-builder.interface';
import { Injectable, signal } from '@angular/core';
import {
  numbers,
  operators,
  specialOperators,
} from '../utils/calculator.utils';

@Injectable({
  providedIn: 'root',
})
export class BasicCalculatorBuilder
  implements CalculatorBuilderInterface<string>
{
  resultText = signal('0');
  subResultText = signal('0');
  lastOperator = signal('+');

  calculateResult(): void {
    const number1 = parseFloat(this.subResultText());
    const number2 = parseFloat(this.resultText());
    let result = 0;

    switch (this.lastOperator()) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
    }
    this.resultText.set(result.toString());
    this.subResultText.set('0');
  }

  reset(): void {
    this.resultText.set('0');
    this.subResultText.set('0');
    this.lastOperator.set('+');
  }

  validateNumber(value: string): void {
    if (value.length <= 0) return;

    // manejo del cero inicial
    if (
      value === '0' &&
      (this.resultText() === '0' || this.resultText() === '-0')
    )
      return;

    // validar numeros
    if (numbers.includes(value)) {
      if (this.resultText() === '0') {
        this.resultText.set(value);
        return;
      }

      if (this.resultText() === '-0') {
        this.resultText.set(`-${value}`);
        return;
      }

      this.resultText.update((x) => `${x}${value}`);
    }
  }

  validateOperators(value: string): void {
    // aplicar operador
    if (operators.includes(value)) {
      // this.calculateResult();
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }
  }

  validateSpecialOperators(value: string): void {
    if (value === '=') {
      this.calculateResult();
      return;
    }

    if (value === 'C') {
      this.reset();
      return;
    }

    if (value === 'Backspace') {
      if (this.resultText() === '0') return;

      if (this.resultText().includes('-') && this.resultText().length === 2) {
        this.resultText.set('0');
        return;
      }

      if (this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }
      this.resultText.update((value) => value.slice(0, -1));
      return;
    }

    // punto decimal
    if (value === '.' && !this.resultText().includes('.')) {
      if (this.lastOperator() === value) return;
      this.resultText.update((value) => value + '.');
      return;
    }

    // cambiar signo
    if (value === '+/-') {
      if (this.resultText().includes('-')) {
        this.resultText.update((x) => x.slice(1));
        return;
      }
      this.resultText.update((x) => `-${x}`);
      return;
    }
  }

  validateValue(value: string): void {
    if (
      !numbers.includes(value) ||
      !operators.includes(value) ||
      !specialOperators.includes(value)
    ) {
      console.error('Invalid input', value);
      throw new Error('Invalid input');
    }

    // limitar número de caracteres
    if (this.resultText().length >= 10 && !specialOperators.includes(value)) {
      console.warn('Max length reached');
      return;
    }
  }
}
