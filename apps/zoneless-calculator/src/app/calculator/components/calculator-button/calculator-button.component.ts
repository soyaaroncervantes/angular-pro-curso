import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { transformBooleanValue } from '../../utils/calculator.utils';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.scss',
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-1/4]': '!isDoubleSize()',
    '[class.w-2/4]': 'isDoubleSize()',
  },
})
export class CalculatorButtonComponent {
  isCommand = input(false, { transform: transformBooleanValue });
  isDoubleSize = input(false, { transform: transformBooleanValue });
  onClick = output<string>();
  protected isPressed = signal(false);
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  handleClick() {
    if (!this.contentValue()?.nativeElement) return;
    const value = this.contentValue()!.nativeElement.innerText.trim();
    this.onClick.emit(value);
  }

  keyboardPressed(key: string) {
    if (!this.contentValue()) return;
    const value = this.contentValue()?.nativeElement.innerText.trim();
    if (value !== key) return;
    this.isPressed.set(true);
    setTimeout(() => this.isPressed.set(false), 100);
  }
}
