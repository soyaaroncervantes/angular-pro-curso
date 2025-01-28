import { inject, Injectable } from '@angular/core';
import { PokemonApiFactory } from '../factories/pokemon-api.factory';
import type { PokemonDto } from '../../dto/pokemon.dto';
import type { APIResponseDto } from '../../../core/services/api-client-abstract-factory';
import type { NamedResourceDto } from '../../dto/resource.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonGroupApiService {
  private readonly api = inject(PokemonApiFactory);
  getPokemon$(filter: NamedResourceDto): APIResponseDto<PokemonDto> {
    return this.api.get<PokemonDto>(
      `/pokemon/${filter?.id ?? filter?.name ?? ''}`
    );
  }
}
