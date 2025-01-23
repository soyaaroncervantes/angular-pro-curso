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

export type HttpOptions<T = undefined> = {
  observe: 'response';
  headers?: HttpHeaders;
  params?: HttpParams;
  context?: HttpContext;
  responseType?: 'json';
  data?: T;
};

export class ApiClientFactory {
  private readonly http = inject(HttpClient);
  private createURL = (path: string) => `${this.url}${path}`;
  protected url: Nullable<string> = null;

  protected get = <T, K = undefined>(
    url: string,
    options?: HttpOptions<K>
  ): Observable<HttpResponse<T>> => this.http.get<T>(this.createURL(url), {
    ...options,
    observe: 'response' as const
  })
}
