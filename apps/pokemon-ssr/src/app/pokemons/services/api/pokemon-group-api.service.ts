import { inject, Injectable } from '@angular/core';
import { PokemonApiFactory } from '../pokemon-api.factory';
import type { NamedFilterDto } from '../../dto/filters.dto';
import type { PokemonDto } from '../../dto/pokemon.dto';
import type { APIResponseDto } from '../../../core/services/api-client-abstract-factory';

@Injectable({
  providedIn: 'root',
})
export class PokemonGroupApiService {
  private readonly api = inject(PokemonApiFactory);
  getPokemon$(filter: NamedFilterDto): APIResponseDto<PokemonDto> {
    return this.api.get<PokemonDto>(
      `/pokemon/${filter?.id ?? filter?.name ?? ''}`
    );
  }
}
