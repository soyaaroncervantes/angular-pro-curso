import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RoutingTestInterface } from '@test/testing.interface';
import CalculatorPageComponent from './calculator-page.component';
import { Nullable } from '../utils/types.utils';
import { CalculatorComponent } from '../components/calculator/calculator.component';

interface SetupTest extends RoutingTestInterface<CalculatorPageComponent> {
  element: Nullable<HTMLElement>;
}

describe('CalculatorPageComponent', () => {
  let sr: RoutingTestInterface<CalculatorPageComponent>;
  beforeEach(async () => (sr = await setup()));

  it('should create calculator page', () => expect(sr.component).toBeTruthy());
  fit('should have a calculator component', () => {
    const calculatorComponent = sr.harness.routeDebugElement?.query(By.directive(CalculatorComponent));
    expect(calculatorComponent).toBeTruthy();
  });
});

async function setup(): Promise<SetupTest> {
  const mockRoutes = [
    {
      path: 'calculator',
      loadComponent: () => import('./calculator-page.component'),
    },
  ];
  await TestBed.configureTestingModule({
    providers: [provideRouter(mockRoutes)],
  }).compileComponents();
  const harness = await RouterTestingHarness.create();
  const component = await harness.navigateByUrl(
    '/calculator',
    CalculatorPageComponent
  );
  const element = harness.routeNativeElement;
  harness.detectChanges();
  return { harness, component, element };
}
