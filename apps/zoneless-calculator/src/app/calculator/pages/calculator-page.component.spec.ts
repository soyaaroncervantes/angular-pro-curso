import { ComponentTestInterface } from '@test/testing.interface';
import CalculatorPageComponent from './calculator-page.component';
import { TestBed } from '@angular/core/testing';

interface SetupTest extends ComponentTestInterface<CalculatorPageComponent> {
  element: HTMLDivElement;
}

describe('CalculatorPageComponent', () => {
  let sr: SetupTest;
  beforeEach(async () => (sr = await setup()));

  it('should create calculator page', () => expect(sr.component).toBeTruthy());
});

async function setup(): Promise<SetupTest> {
  await TestBed.configureTestingModule({
    imports: [CalculatorPageComponent],
  }).compileComponents();
  const fixture = TestBed.createComponent(CalculatorPageComponent);
  const component = fixture.componentInstance;
  const element = fixture.nativeElement as HTMLDivElement;
  fixture.detectChanges();
  return { fixture, component, element };
}
