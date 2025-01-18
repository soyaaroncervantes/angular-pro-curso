import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact page');
    this.meta.updateTag({
      name: 'description',
      content: 'Contact page sobre la Pokedex',
    });
    this.meta.updateTag({ name: 'og:title', content: 'contact page' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'angular,angular-advanced,aaron,cervantes,soyaaroncervantes,proyecto',
    });
  }
}
