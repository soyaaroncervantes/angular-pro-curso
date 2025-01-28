import { createMap, forMember, mapFrom } from '@automapper/core';
import { mapper } from '../core/mappings/mapper';
import { FilterListModel, FilterModel } from './models/filter.model';
import { FilterDto, FilterListDto } from './dto/filters.dto';
import { PokemonAPIResourceListModel, PokemonNamedAPIResourceListModel } from './models/list.model';
import { PokemonAPIResourceListDto, PokemonNamedAPIResourceListDto } from './dto/list.dto';
import { APIResourceDto, NamedAPIResourceDto } from './dto/utility.dto';
import { APIResourceModel, NamedAPIResourceModel } from './models/utility.model';

createMap(mapper, FilterModel, FilterDto);
createMap(mapper, FilterListModel, FilterListDto);

createMap(mapper, NamedAPIResourceDto, NamedAPIResourceModel);
createMap(mapper, APIResourceDto, APIResourceModel);

createMap(
  mapper,
  PokemonNamedAPIResourceListDto,
  PokemonNamedAPIResourceListModel,
  forMember(
    x => x.results,
    mapFrom(x => mapper.mapArray(x.results, NamedAPIResourceDto, NamedAPIResourceModel))
  )
);
createMap(
  mapper,
  PokemonAPIResourceListDto,
  PokemonAPIResourceListModel,
  forMember(
    x => x.results,
    mapFrom(x => mapper.mapArray(x.results, APIResourceDto, APIResourceModel))
  )
)
