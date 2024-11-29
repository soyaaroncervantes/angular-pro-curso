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

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  imports: [CalculatorButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  buttons = viewChildren(CalculatorButtonComponent);
  private calculatorService = inject(CalculatorService);
  resultText = computed(() => this.calculatorService.resultText());
  subResultText = computed(() => this.calculatorService.subResultText());
  lastOperator = computed(() => this.calculatorService.lastOperator());

  handleClick = (key: string) => this.calculatorService.constructNumber(key);

  handleKeyboardEvent(event: KeyboardEvent) {
    const key = keyEquivalent.get(event.key) || event.key;
    this.handleClick(key);
    this.buttons().forEach((button) => button.keyboardPressed(key));
  }
}
