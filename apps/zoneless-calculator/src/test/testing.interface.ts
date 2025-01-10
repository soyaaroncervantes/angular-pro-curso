import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';

export interface ComponentTestInterface<T> {
  fixture: ComponentFixture<T>;
  component: T;
}

export interface RoutingTestInterface<T> {
  harness: RouterTestingHarness,
  component: T
}
