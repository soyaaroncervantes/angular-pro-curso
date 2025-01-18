import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ComponentTestInterface } from '@test/testing.interface';
import { CalculatorButtonComponent } from './calculator-button.component';
import { By } from '@angular/platform-browser';

describe('CalculatorButtonComponent', () => {
  let sr: ComponentTestInterface<CalculatorButtonComponent>;
  beforeEach(async () => (sr = await setup()));

  it('should create component', () => expect(sr.component).toBeTruthy());
  it('should host element has w-1/4 class, when isDoubleSize is false', () => {
    const classList = (
      sr.fixture.nativeElement as HTMLElement
    ).classList.value.split(' ');
    expect(sr.component.isDoubleSize()).toBeFalsy();
    expect(classList).toContain('w-1/4');
  });
  it('should host element has w-2/4 class, when isDoubleSize is true', () => {
    sr.fixture.componentRef.setInput('isDoubleSize', true);
    sr.fixture.detectChanges();
    const classList = (
      sr.fixture.nativeElement as HTMLElement
    ).classList.value.split(' ');
    expect(sr.component.isDoubleSize()).toBeTruthy();
    expect(classList).toContain('w-2/4');
  });

  describe('when click is raised', () => {
    it('should emit clickOutput,when button is clicked', fakeAsync(() => {
      const handleClickSpy = jest.spyOn(sr.component, 'handleClick');
      sr.fixture.detectChanges();
      const button = sr.fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      sr.fixture.detectChanges();
      tick();
      expect(handleClickSpy).toHaveBeenCalled();
    }));
  });
});

const setup = async () => {
  await TestBed.configureTestingModule({
    imports: [CalculatorButtonComponent],
  }).compileComponents();
  const fixture = TestBed.createComponent(CalculatorButtonComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return { fixture, component };
};
