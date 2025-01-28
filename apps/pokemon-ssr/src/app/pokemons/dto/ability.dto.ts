import { AutoMap } from '@automapper/classes';
import { PokemonNamedAPIResourceListDto } from './list.dto';

export class AbilityDto {
  @AutoMap(() => String) id!: number;
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) is_main_series!: boolean;
  @AutoMap(() => PokemonNamedAPIResourceListDto) generation!: PokemonNamedAPIResourceListDto;
  @AutoMap(() => [NameDTO]) names!: [];

}

export class NameDTO {
  @AutoMap(() => Number) name!: string;
  @AutoMap(() => PokemonNamedAPIResourceListDto) language!: PokemonNamedAPIResourceListDto;
}
