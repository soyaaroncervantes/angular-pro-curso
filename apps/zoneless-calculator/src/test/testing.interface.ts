import { ComponentFixture } from '@angular/core/testing';

export interface ComponentTestInterface<T> {
  fixture: ComponentFixture<T>;
  component: T;
}
