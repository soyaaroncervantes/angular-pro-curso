import { inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {
  PokemonApiFactory,
  PokemonResourceList,
} from '../factories/pokemon-api.factory';
import type { APIResponseDto } from '../../../core/api/api-abstract-factory';
import type {
  FilterDto,
  PaginationFilterDto
} from '../../dto/filters.dto';
import type { PaginationByOffsetDto } from '../../dto/pagination.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonListApiService implements PokemonResourceList {
  private readonly api = inject(PokemonApiFactory);

  getList$<
    A,
    B extends PaginationByOffsetDto<C>,
    C extends FilterDto = PaginationFilterDto,
  >(path: string, filters?: B): APIResponseDto<A> {
    return this.api.get<A>(path, {
      params: new HttpParams()
        .set('limit', filters?.limit.toString() ?? 90)
        .set('offset', filters?.offset.toString() ?? 0),
    });
  }
}
