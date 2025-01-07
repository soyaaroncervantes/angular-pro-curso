import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { expect } from '@playwright/test';
import { ComponentTestInterface } from '@test/testing.interface';

interface SetupTest extends ComponentTestInterface<AppComponent> {
  element: HTMLDivElement;
}

describe('AppComponent', () => {
  let sr: SetupTest;
  beforeEach(async () => (sr = await setup()));

  it('should create zoneless calculator app', () =>
    expect(sr.component).toBeTruthy());
  it(`should have the 'zoneless-calculator' title`, () => {
    expect(sr.component.title).toMatch('zoneless-calculator!');
  });
  it('should render router-outlet', () => {
    const { element } = sr;
    expect(element.querySelector('router-outlet')).not.toBeNull();
  });
  it('should render buy me a beer button', () => {
    const { element } = sr;
    expect(element.querySelector('a')?.title).toMatch('Buy me a beer');
    expect(element.querySelector('a')?.target).toBe('_blank');
    expect(element.querySelector('a')?.getAttribute('href')).toMatch(
      'buymeacoffee.com'
    );
  });
});

async function setup(): Promise<SetupTest> {
  await TestBed.configureTestingModule({
    imports: [AppComponent],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppComponent);
  const component = fixture.componentInstance;
  const element = fixture.nativeElement as HTMLDivElement;
  fixture.detectChanges();
  return { fixture, component, element };
}
