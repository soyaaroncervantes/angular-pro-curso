import { AutoMap } from '@automapper/classes';
import { NamedResourceListDto } from './list.dto';

// Species type is NamedResourceListDto

export class PokemonDto {
  // id:                       number;
  // name:                     string;
  // base_experience:          number;
  // height:                   number;
  // is_default:               boolean;
  // order:                    number;
  // weight:                   number;
  // abilities:                Ability[];
  // forms:                    Species[];
  // game_indices:             GameIndex[];
  // held_items:               HeldItem[];
  // location_area_encounters: string;
  // moves:                    Move[];
  // species:                  Species;
  // sprites:                  Sprites;
  // cries:                    Cries;
  // stats:                    Stat[];
  // types:                    Type[];
  // past_types:               PastType[];
  @AutoMap(() => String) id!: number;
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) base_experience!: number;
  @AutoMap(() => String) height!: number;
  @AutoMap(() => String) is_default!: boolean;
  @AutoMap(() => String) order!: number;
  @AutoMap(() => String) weight!: number;
  @AutoMap(() => Array) abilities!: PokemonAbilityDto[];
  @AutoMap(() => Array) forms!: NamedResourceListDto[];
  @AutoMap(() => Array) game_indices!: PokemonGameIndexDto[];
  @AutoMap(() => Array) held_items!: PokemonHeldItemDto[];
  @AutoMap(() => String) location_area_encounters!: string;
  @AutoMap(() => Array) moves!: PokemonMoveDto[];
  @AutoMap(() => NamedResourceListDto) species!: NamedResourceListDto;
  @AutoMap(() => Array) sprites!: PokemonSpriteDto[];

}

export class PokemonAbilityDto {
  @AutoMap(() => Number) is_hidden!: boolean;
  @AutoMap(() => Number) slot!: number;
  @AutoMap(() => Number) ability!: NamedResourceListDto;
}

export class PokemonGameIndexDto {
  @AutoMap(() => String) game_index!: number;
  @AutoMap(() => NamedResourceListDto) version!: NamedResourceListDto;
}

export class PokemonHeldItemDto {
  @AutoMap(() => String) item!: NamedResourceListDto;
  @AutoMap(() => Array) version_details!: VersionDetailsDto[];
}

export class VersionDetailsDto {
  @AutoMap(() => String) rarity!: number;
  @AutoMap(() => NamedResourceListDto) version!: NamedResourceListDto;
}

export class PokemonMoveDto {
  @AutoMap(() => NamedResourceListDto) move!: NamedResourceListDto;
  @AutoMap(() => Array) version_group_details!: VersionGroupDetail[];
}

export class VersionGroupDetail {
  @AutoMap(() => Number) level_learned_at!: number;
  @AutoMap(() => NamedResourceListDto) version_group!: NamedResourceListDto;
  @AutoMap(() => NamedResourceListDto) move_learn_method!: NamedResourceListDto;
}

export class SpriteDto {
  @AutoMap(() => String) back_default!: string;
  @AutoMap(() => String) back_female!: string;
  @AutoMap(() => String) back_shiny!: string;
  @AutoMap(() => String) back_shiny_female!: string;
  @AutoMap(() => String) front_default!: string;
  @AutoMap(() => String) front_female!: string;
  @AutoMap(() => String) front_shiny!: string;
  @AutoMap(() => String) front_shiny_female!: string;
}

export class PokemonSpriteDto extends SpriteDto {
  @AutoMap(() => OtherSpriteDto) other!: OtherSpriteDto;
  @AutoMap(() => SpriteDto) animated!: SpriteDto;
  @AutoMap(() => VersionsDto) versions!: VersionsDto;
}

export class OtherSpriteDto {
  @AutoMap(() => DreamWorldSpriteDto) dream_world!: DreamWorldSpriteDto;
  @AutoMap(() => HomeSpriteDto) home!: HomeSpriteDto;
  @AutoMap(() => OfficialArtworkSpriteDto) "official-artwork"!: OfficialArtworkSpriteDto;
  @AutoMap(() => SpriteDto) showdown!: SpriteDto;
}

export class DreamWorldSpriteDto {
  @AutoMap(() => String) front_default!: string;
  @AutoMap(() => String) front_female!: string;
}

export class HomeSpriteDto {
  @AutoMap(() => String) front_default!: string;
  @AutoMap(() => String) front_female!: string;
  @AutoMap(() => String) front_shiny!: string;
  @AutoMap(() => String) front_shiny_female!: string;
}

export class OfficialArtworkSpriteDto {
  @AutoMap(() => String) front_default!: string;
  @AutoMap(() => String) front_shiny!: string;
}

