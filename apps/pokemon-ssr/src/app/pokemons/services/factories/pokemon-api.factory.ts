import { Injectable } from '@angular/core';
import {
  ApiClientAbstractFactory,
  type APIResponseDto,
  type HttpOptions
} from '../../../core/services/api-client-abstract-factory';
import { FilterDto } from '../../dto/filters.dto';
import { PaginationByOffsetDto } from '../../dto/pagination.dto';

export interface PokemonResourceList {
  getList$<A, B extends PaginationByOffsetDto<C>, C extends FilterDto> (
    path: string,
    filters?: B,
  ): APIResponseDto<A>
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
