import {
  createMap,
  forMember,
  mapFrom,
  MappingProfile,
} from '@automapper/core';
import {
  FilterModel,
  PaginationFilterModel,
  PokemonPaginationFilterModel,
} from './models/filter.model';
import {
  FilterDto,
  PaginationFilterDto,
  PokemonPaginationFilterDto,
} from './dto/filters.dto';
import {
  PokemonAPIResourceListModel,
  PokemonNamedAPIResourceListModel,
} from './models/list.model';
import {
  PokemonAPIResourceListDto,
  PokemonNamedAPIResourceListDto,
} from './dto/list.dto';
import { APIResourceDto, NamedAPIResourceDto } from './dto/utility.dto';
import {
  APIResourceModel,
  NamedAPIResourceModel,
} from './models/utility.model';

export const pokemonProfile: MappingProfile = (mapper) => {
  createMap(mapper, FilterModel, FilterDto);
  createMap(mapper, PaginationFilterModel, PaginationFilterDto);

  createMap(
    mapper,
    NamedAPIResourceDto,
    NamedAPIResourceModel,
    forMember(
      x => x.url,
      mapFrom(x => new URL(x.url))
    ),
    forMember(
      x => x.id,
      mapFrom(x => x.url.split('/').at(-2) !== undefined ?
        Number(x.url.split('/').at(-2)) :
        null)
    ),
  );
  createMap(mapper, APIResourceDto, APIResourceModel);

  createMap(
    mapper,
    APIResourceDto,
    APIResourceModel,
    forMember(
      x => x.url,
      mapFrom(x => new URL(x.url))
    ),
    forMember(
      x => x.id,
      mapFrom(x => x.url.split('/').at(-2) !== undefined ?
        Number(x.url.split('/').at(-2)) :
        null)
    ),
  );

  createMap(
    mapper,
    PokemonPaginationFilterModel,
    PokemonPaginationFilterDto,
    forMember(
      (x) => x.request,
      mapFrom((x) =>
        mapper.map(x.request, PaginationFilterModel, PaginationFilterDto)
      )
    )
  );

  createMap(
    mapper,
    PokemonNamedAPIResourceListDto,
    PokemonNamedAPIResourceListModel,
    forMember(
      (x) => x.results,
      mapFrom((x) =>
        mapper.mapArray(x.results, NamedAPIResourceDto, NamedAPIResourceModel)
      )
    )
  );
  createMap(
    mapper,
    PokemonAPIResourceListDto,
    PokemonAPIResourceListModel,
    forMember(
      (x) => x.results,
      mapFrom((x) =>
        mapper.mapArray(x.results, APIResourceDto, APIResourceModel)
      )
    )
  );
};
