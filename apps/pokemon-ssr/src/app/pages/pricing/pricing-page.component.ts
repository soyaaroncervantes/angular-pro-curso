import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent {}
