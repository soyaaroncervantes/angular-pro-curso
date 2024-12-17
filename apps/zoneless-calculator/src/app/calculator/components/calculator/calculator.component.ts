import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '@components/calculator-button/calculator-button.component';
import { keyEquivalent } from '../../utils/calculator.utils';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { CalculatorDirector } from '../../directors/calculator.director';
import { BasicCalculatorBuilder } from '../../builders/basic-calculator.builder';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  imports: [CalculatorButtonComponent, NgTemplateOutlet, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event.key)',
  },
})
export class CalculatorComponent {
  protected readonly buttons = viewChildren(CalculatorButtonComponent);
  private readonly basicCalculatorBuilder = inject(BasicCalculatorBuilder);
  private readonly calculatorDirector = inject(CalculatorDirector);
  protected readonly resultText = computed(() =>
    this.basicCalculatorBuilder.resultText()
  );
  protected readonly subResultText = computed(() =>
    this.basicCalculatorBuilder.subResultText()
  );
  protected readonly lastOperator = computed(() =>
    this.basicCalculatorBuilder.lastOperator()
  );

  protected handleClick = (value: string) => {
    const key = keyEquivalent.get(value) || value;
    this.calculatorDirector.makeSimpleCalculator(this.basicCalculatorBuilder, key);
  };

  protected handleKeyboardEvent(key: string) {
    this.handleClick(key);
    this.buttons().forEach((button) => button.keyboardPressed(key));
  }
}
