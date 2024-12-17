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
import { BasicCalculatorService } from '@services/basic-calculator.service';

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
  private readonly basicCalculatorService = inject(BasicCalculatorService);
  protected readonly resultText = computed(() =>
    this.basicCalculatorService.resultText()
  );
  protected readonly subResultText = computed(() =>
    this.basicCalculatorService.subResultText()
  );
  protected readonly lastOperator = computed(() =>
    this.basicCalculatorService.lastOperator()
  );

  protected handleClick = (value: string) => {
    const key = keyEquivalent.get(value) || value;
    new CalculatorDirector(this.basicCalculatorService, key);
  };

  protected handleKeyboardEvent(key: string) {
    this.handleClick(key);
    this.buttons().forEach((button) => button.keyboardPressed(key));
  }
}
