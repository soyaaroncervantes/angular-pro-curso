import { Injectable } from '@angular/core';
import {
  ApiClientAbstractFactory,
  type APIResponseDto,
  type HttpOptions
} from '../../../core/services/api-client-abstract-factory';
import type { FilterListDto } from '../../dto/filters.dto';

export interface PokemonResourceList {
  getList$<T>(
    path: string,
    params?: FilterListDto
  ): APIResponseDto<T>
}

@Injectable({
  providedIn: 'root',
})
export class PokemonApiFactory extends ApiClientAbstractFactory {
  protected url = 'https://pokeapi.co/api/v2';
  get<T>(url: string, options?: HttpOptions): APIResponseDto<T> {
    return this.http.get<T>(this.createURL(url), {
      ...options,
      observe: 'response' as const,
    });
  }
}
