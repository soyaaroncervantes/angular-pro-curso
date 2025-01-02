import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from '../components/calculator/calculator.component';

@Component({
    selector: 'app-calculator-page',
    templateUrl: './calculator-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CalculatorComponent]
})
export default class CalculatorPageComponent {}
