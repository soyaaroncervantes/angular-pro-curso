import { inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { PokemonApiFactory, PokemonResourceList } from '../pokemon-api.factory';
import type { FilterListDto } from '../../dto/filters.dto';
import type { APIResponseDto } from '../../../core/services/api-client-abstract-factory';
import {
  PokemonAPIResourceListDto,
  PokemonNamedAPIResourceListDto,
} from '../../dto/list.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonListApiService implements PokemonResourceList {
  private readonly api = inject(PokemonApiFactory);

  getList$<T = PokemonNamedAPIResourceListDto | PokemonAPIResourceListDto>(
    path: string,
    params?: FilterListDto
  ): APIResponseDto<T> {
    return this.api.get<T>(path, {
      params: new HttpParams()
        .set('limit', params?.limit.toString() ?? 90)
        .set('offset', params?.offset.toString() ?? 0),
    });
  }
}
