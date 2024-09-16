import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { transformBooleanValue } from '../../utils/calculator.utils';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
})
export class CalculatorButtonComponent {
  isCommand = input(false, { transform: transformBooleanValue });
  isDoubleSize = input(false, { transform: transformBooleanValue });

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
