import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PokemonListApiService } from './api/pokemon-list-api.service';
import { FilterListModel } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private readonly pokemonListApi = inject(PokemonListApiService);

  getNamedList$(path: string, filter?: FilterListModel) {
    return this.pokemonListApi
      .getList$(path, filter)
      .pipe(map(({ body }) => body));
  }
}
