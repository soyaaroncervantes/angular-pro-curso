import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit(): void {

    console.log({
      browser: isPlatformBrowser(this.platform),
      server: isPlatformServer(this.platform),
    });

    this.title.setTitle('Pricing page');
    this.meta.updateTag({
      name: 'description',
      content: 'Pricing page sobre la Pokedex',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'angular,angular-advanced,aaron,cervantes,soyaaroncervantes,proyecto',
    });
  }
}
