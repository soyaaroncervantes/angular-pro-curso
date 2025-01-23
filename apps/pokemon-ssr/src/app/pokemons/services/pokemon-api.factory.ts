import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiClientAbstractFactory, HttpOptions } from '../../core/services/api-client-abstract-factory';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiFactory extends ApiClientAbstractFactory {
  protected override url = 'https://pokeapi.co/api/v2';

  override get<T>(url: string, options?: HttpOptions): Observable<HttpResponse<T>> {
    return this.http.get<T>(this.createURL(url), {
      ...options,
      observe: 'response' as const
    });
  }
}
