import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('About page');
    this.meta.updateTag({ name: 'description', content: 'About page sobre la Pokedex' });
    this.meta.updateTag({ name: 'og:title', content: 'About page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'angular,angular-advanced,aaron,cervantes,soyaaroncervantes,proyecto'
    })
  }
}
