import { Nullable } from '../../core/utils/types.utils';
import { AutoMap } from '@automapper/classes';
import type { APIResourceDto, NamedAPIResourceDto } from './utility.dto';

export class ListDto<T> {
  @AutoMap(() => Number) count!: number;
  @AutoMap(() => String) next!: string;
  @AutoMap(() => String) previous!: Nullable<string>;
  @AutoMap(() => Array) results: T[] = [];
}

export class PokemonNamedAPIResourceListDto extends  ListDto<NamedAPIResourceDto>{}
export class PokemonAPIResourceListDto extends ListDto<APIResourceDto>{}
