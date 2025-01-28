import { AutoMap } from '@automapper/classes';
import { NamedAPIResourceDto, VersionGameIndexDto } from './utility.dto';


export class PokemonDto {
  @AutoMap(() => Number) id!: number;
  @AutoMap(() => String) name!: string;
  @AutoMap(() => Number) base_experience!: number;
  @AutoMap(() => Number) height!: number;
  @AutoMap(() => Boolean) is_default!: boolean;
  @AutoMap(() => Number) order!: number;
  @AutoMap(() => Number) weight!: number;
  @AutoMap(() => String) location_area_encounters!: string;
  @AutoMap(() => PokemonCriesDto) cries!: PokemonCriesDto;
  @AutoMap(() => NamedAPIResourceDto) species!: NamedAPIResourceDto;
  @AutoMap(() => [PokemonAbilityDto]) abilities!: PokemonAbilityDto[];
  @AutoMap(() => [NamedAPIResourceDto]) forms!: NamedAPIResourceDto[];
  @AutoMap(() => [VersionGameIndexDto]) game_indices!: VersionGameIndexDto[];
  @AutoMap(() => [PokemonHeldItemDto]) held_items!: PokemonHeldItemDto[];
  @AutoMap(() => [PokemonMoveDto]) moves!: PokemonMoveDto[];
  @AutoMap(() => [PokemonTypePastDto]) past_types!: PokemonTypePastDto[];
  @AutoMap(() => [PokemonSpritesDto]) sprites!: PokemonSpritesDto[];
  @AutoMap(() => [PokemonStatDto]) stats!: PokemonStatDto[];
  @AutoMap(() => [PokemonTypeDto]) types!: PokemonTypeDto[];
}

export class PokemonAbilityDto {
  @AutoMap(() => Boolean) is_hidden!: boolean;
  @AutoMap(() => Number) slot!: number;
  @AutoMap(() => NamedAPIResourceDto) ability!: NamedAPIResourceDto;
}

export class PokemonTypeDto {
  @AutoMap(() => Number) slot!: number;
  @AutoMap(() => NamedAPIResourceDto) type!: NamedAPIResourceDto;
}

export type PokemonFormTypeDto = PokemonTypeDto;

export class PokemonTypePastDto {
  @AutoMap(() => PokemonTypeDto) type!: PokemonTypeDto;
  @AutoMap(() => NamedAPIResourceDto) generation!: NamedAPIResourceDto;
}

export class PokemonHeldItemDto {
  @AutoMap(() => NamedAPIResourceDto) item!: NamedAPIResourceDto;
  @AutoMap(() => [PokemonHeldItemVersionDto]) version_details!: PokemonHeldItemVersionDto[];
}

export class PokemonHeldItemVersionDto {
  @AutoMap(() => Number) rarity!: number;
  @AutoMap(() => NamedAPIResourceDto) version!: NamedAPIResourceDto;
}

export class PokemonMoveDto {
  @AutoMap(() => NamedAPIResourceDto) move!: NamedAPIResourceDto;
  @AutoMap(() => [PokemonMoveVersionDto]) version_group_details!: PokemonMoveVersionDto[];
}

export class PokemonMoveVersionDto {
  @AutoMap(() => Number) level_learned_at!: number;
  @AutoMap(() => NamedAPIResourceDto) version_group!: NamedAPIResourceDto;
  @AutoMap(() => NamedAPIResourceDto) move_learn_method!: NamedAPIResourceDto;
}

export class PokemonStatDto {
  @AutoMap(() => Number) base_stat!: number;
  @AutoMap(() => Number) effort!: number;
  @AutoMap(() => NamedAPIResourceDto) stat!: NamedAPIResourceDto;
}

export class PokemonSpritesDto {
  @AutoMap(() => String) back_default!: string;
  @AutoMap(() => String) back_female!: string;
  @AutoMap(() => String) back_shiny!: string;
  @AutoMap(() => String) back_shiny_female!: string;
  @AutoMap(() => String) front_default!: string;
  @AutoMap(() => String) front_female!: string;
  @AutoMap(() => String) front_shiny!: string;
  @AutoMap(() => String) front_shiny_female!: string;
}

export class PokemonCriesDto {
  @AutoMap(() => String) latest!: string;
  @AutoMap(() => String) legacy!: string;
}
