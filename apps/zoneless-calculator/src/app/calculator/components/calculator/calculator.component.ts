import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '@components/calculator-button/calculator-button.component';
import { keyEquivalent } from '../../utils/calculator.utils';
import { CalculatorService } from '@services/calculator.service';
import { NgClass, NgTemplateOutlet } from '@angular/common';

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
  private readonly calculatorService = inject(CalculatorService);
  protected readonly resultText = computed(() =>
    this.calculatorService.resultText()
  );
  protected readonly subResultText = computed(() =>
    this.calculatorService.subResultText()
  );
  protected readonly lastOperator = computed(() =>
    this.calculatorService.lastOperator()
  );

  protected handleClick = (value: string) => {
    const key = keyEquivalent.get(value) || value;
    this.calculatorService.constructNumber(key);
  };

  protected handleKeyboardEvent(key: string) {
    this.handleClick(key);
    this.buttons().forEach((button) => button.keyboardPressed(key));
  }
}
