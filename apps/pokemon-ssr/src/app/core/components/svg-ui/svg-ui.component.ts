import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-svg-ui',
  templateUrl: './svg-ui.component.html',
  styleUrl: './svg-ui.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  }
})
export class SvgUiComponent {
  /** SVG symbol's ID */
  name = input.required<string>();

  /** If `true` then `local-dynamic.svg` file will be used, otherwise `shared-dynamic.svg`. Default value: `false` */
  local = input<boolean>(false);

  protected path = computed(() => this.local()
    ? '/assets/local-static.svg'
    : '/assets/static-icons.svg');
}
