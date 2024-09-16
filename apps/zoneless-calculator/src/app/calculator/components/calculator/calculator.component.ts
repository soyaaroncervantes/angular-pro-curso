import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '@components/calculator-button/calculator-button.component';
import { keyEquivalent } from '../../utils/calculator.utils';

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
  buttons = viewChildren(CalculatorButtonComponent)
  handleClick(key: string) {
    console.log({ key });
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const key = keyEquivalent.get(event.key) || event.key;
    this.handleClick(key);
    this.buttons().forEach(button => button.keyboardPressed(key));
  }
}
