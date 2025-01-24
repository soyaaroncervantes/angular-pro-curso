import { Nullable } from '../../core/utils/types.utils';
import { AutoMap } from '@automapper/classes';
import type { APIResourceDto, NamedAPIResourceDto } from './utility.dto';

class BaseListDto<T> {
  @AutoMap(() => Number) count!: number;
  @AutoMap(() => String) next!: string;
  @AutoMap(() => String) previous!: Nullable<string>;
  @AutoMap(() => Array) results!: T[];
}

export class PokemonNamedAPIResourceListDto extends  BaseListDto<NamedAPIResourceDto>{}
export class PokemonAPIResourceListDto extends BaseListDto<APIResourceDto>{}
