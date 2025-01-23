import { inject, Injectable } from '@angular/core';
import { PokemonApiFactory } from '../pokemon-api.factory';
import { BaseFilterDto, NamedFilterDto } from '../../dto/filters.dto';
import { PokemonDto } from '../../dto/pokemon.dto';
import { BaseListDto } from '../../dto/list.dto';
import { NamedAPIResourceDto } from '../../dto/utility.dto';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonGroupApiService {
  private readonly api = inject(PokemonApiFactory);

  getPokemons$(params?: BaseFilterDto): Observable<HttpResponse<BaseListDto<NamedAPIResourceDto>>> {
    return this.api.get<BaseListDto<NamedAPIResourceDto>>('/pokemon', {
      params: new HttpParams()
        .set('limit', params?.limit.toString() ?? 90)
        .set('offset', params?.offset.toString() ?? 0),
    });
  }

  getPokemon$(filter: NamedFilterDto) {
    return this.api.get<PokemonDto>(`/pokemon/${filter?.id ?? filter?.name ?? ''}`);
  }
}
