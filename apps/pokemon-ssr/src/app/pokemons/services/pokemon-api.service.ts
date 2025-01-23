import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiClientFactory, HttpOptions } from '../../core/services/api-client-factory';
import { BaseListDto } from '../dto/list.dto';
import { NamedResourceDto } from '../dto/resource.dto';
import { NamedFilterDto } from '../dto/filters.dto';
import { PokemonDto } from '../dto/pokemon.dto';
import { NamedAPIResourceDto } from '../dto/utility.dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiClient extends ApiClientFactory {
  protected override url = 'https://pokeapi.co/api/v2';
  private pokemonsURL = `${this.url}/pokemon`;

  getPokemons(): Observable<HttpResponse<BaseListDto<NamedAPIResourceDto>>> {
    return this.get<BaseListDto<NamedAPIResourceDto>>(`${this.pokemonsURL}`);
  }

  getPokemon(options?: HttpOptions<NamedResourceDto>): Observable<HttpResponse<PokemonDto>> {
    return this.get<PokemonDto, NamedFilterDto>(
      `${this.pokemonsURL}/${options?.data?.id ?? options?.data?.name ?? ''}`,
      options
    );
  }
}
