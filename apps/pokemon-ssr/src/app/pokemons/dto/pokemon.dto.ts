import { AutoMap } from '@automapper/classes';
import { NamedAPIResourceDto, VersionGameIndexDto } from './utility.dto';


export class PokemonDto {
  @AutoMap(() => String) id!: number;
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) base_experience!: number;
  @AutoMap(() => String) height!: number;
  @AutoMap(() => String) is_default!: boolean;
  @AutoMap(() => String) order!: number;
  @AutoMap(() => String) weight!: number;
  @AutoMap(() => Array) abilities!: PokemonAbilityDto[];
  @AutoMap(() => Array) forms!: NamedAPIResourceDto[];
  @AutoMap(() => Array) game_indices!: VersionGameIndexDto[];
  @AutoMap(() => Array) held_items!: PokemonHeldItemDto[];
  @AutoMap(() => String) location_area_encounters!: string;
  @AutoMap(() => Array) moves!: PokemonMoveDto[];
  @AutoMap(() => Array) past_types!: PokemonTypePastDto[];
  @AutoMap(() => Array) sprites!: PokemonSpritesDto[];
  @AutoMap(() => PokemonCriesDto) cries!: PokemonCriesDto;
  @AutoMap(() => NamedAPIResourceDto) species!: NamedAPIResourceDto;
  @AutoMap(() => PokemonStatDto) stats!: PokemonStatDto[];
  @AutoMap(() => PokemonTypeDto) types!: PokemonTypeDto[];
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
  @AutoMap(() => String) item!: NamedAPIResourceDto;
  @AutoMap(() => Array) version_details!: PokemonHeldItemVersionDto[];
}

export class PokemonHeldItemVersionDto {
  @AutoMap(() => String) rarity!: number;
  @AutoMap(() => NamedAPIResourceDto) version!: NamedAPIResourceDto;
}

export class PokemonMoveDto {
  @AutoMap(() => NamedAPIResourceDto) move!: NamedAPIResourceDto;
  @AutoMap(() => Array) version_group_details!: PokemonMoveVersionDto[];
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
