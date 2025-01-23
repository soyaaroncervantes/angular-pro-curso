import { Injectable } from '@angular/core';
import { ApiClientFactory, HttpOptions } from '../../core/services/api-client-factory';
import { NamedResourceListDto } from '../dto/list.dto';
import { NameResourceDto } from '../dto/resource.dto';
import { NamedFilterDto } from '../dto/filters.dto';
import { PokemonDto } from '../dto/pokemon.dto';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiClient extends ApiClientFactory {
  protected override url = 'https://pokeapi.co/api/v2';
  private pokemonsURL = `${this.url}/pokemon`;

  getPokemons() {
    return this.get<NamedResourceListDto>(`${this.pokemonsURL}`);
  }

  getPokemon(options?: HttpOptions<NameResourceDto>): Observable<HttpResponse<PokemonDto>> {
    return this.get<PokemonDto, NamedFilterDto>(
      `${this.pokemonsURL}/${options?.data?.id ?? options?.data?.name ?? ''}`,
      options
    );
  }
}
