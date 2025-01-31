import { inject } from '@angular/core';
import {
  HttpClient,
  type HttpContext,
  type HttpHeaders,
  type HttpParams,
  type HttpResponse,
} from '@angular/common/http';
import type { Observable } from 'rxjs';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  context?: HttpContext;
  responseType?: 'json';
}

export type APIResponseDto<T> = Observable<HttpResponse<T>>;

export abstract class ApiAbstractFactory {
  protected readonly http = inject(HttpClient);
  protected readonly abstract url: string;

  protected readonly createURL = (path: string) => `${this.url}${path}`;

  protected abstract get<T>(url: string, options?: HttpOptions): APIResponseDto<T>;
}
