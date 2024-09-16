import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from '@components/calculator-button/calculator-button.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  imports: [CalculatorButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
