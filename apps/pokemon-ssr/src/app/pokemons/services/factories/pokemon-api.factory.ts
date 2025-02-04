import { Injectable } from '@angular/core';
import {
  ApiAbstractFactory,
  type APIResponseDto,
  type HttpOptions,
} from '../../../core/api/api-abstract-factory';
import { FilterDto } from '../../dto/filters.dto';
import { PaginationByOffsetDto } from '../../dto/pagination.dto';

export interface PokemonResourceList {
  getList$<A, B extends PaginationByOffsetDto<C>, C extends FilterDto>(
    path: string,
    filters?: B
  ): APIResponseDto<A>;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonApiFactory extends ApiAbstractFactory {
  protected readonly url = 'https://pokeapi.co/api/v2';

  get<T>(path: string, options?: HttpOptions): APIResponseDto<T> {
    return this.http.get<T>(this.createURL(path), {
      ...options,
      observe: 'response' as const,
    });
  }
}
