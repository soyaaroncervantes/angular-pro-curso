import { inject } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Nullable } from '../utils/types.utils';
import { Observable } from 'rxjs';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  context?: HttpContext;
  responseType?: 'json';
}

export abstract class ApiClientAbstractFactory {
  protected readonly http = inject(HttpClient);
  protected readonly createURL = (path: string) => `${this.url}${path}`;
  protected url: Nullable<string> = null;

  protected abstract get<T>(url: string, options?: HttpOptions): Observable<HttpResponse<T>>;
}
