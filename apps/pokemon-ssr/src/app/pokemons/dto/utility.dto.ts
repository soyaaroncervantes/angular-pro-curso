import { AutoMap } from '@automapper/classes';

export class NamedAPIResourceDto {
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) url!: string;
}

export class APIResourceDto {
  @AutoMap(() => String) url!: string;
}

export class DescriptionDto {
  @AutoMap(() => String) description!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
}

export class EffectDto {
  @AutoMap(() => String) effect!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
}

export class EncounterDto {
  @AutoMap(() => Number) min_level!: number;
  @AutoMap(() => Number) max_level!: number;
  @AutoMap(() => [NamedAPIResourceDto]) condition_values!: NamedAPIResourceDto[];
  @AutoMap(() => Number) chance!: number;
  @AutoMap(() => NamedAPIResourceDto) method!: NamedAPIResourceDto;
}

export class FlavorTextDto {
  @AutoMap(() => String) flavor_text!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
  @AutoMap(() => NamedAPIResourceDto) version!: NamedAPIResourceDto
}

export class GenerationGameIndexDto {
  @AutoMap(() => Number) game_index!: number;
  @AutoMap(() => NamedAPIResourceDto) generation!: NamedAPIResourceDto
}

export class MachineVersionDetailDto {
  @AutoMap(() => APIResourceDto) machine!: APIResourceDto;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
}

export class NameDto {
  @AutoMap(() => String) name!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
}

export class VerboseEffectDto {
  @AutoMap(() => String) short_effect!: string;
  @AutoMap(() => String) effect!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
}

export class VersionEncounterDetailDto {
  @AutoMap(() => NamedAPIResourceDto) version!: NamedAPIResourceDto;
  @AutoMap(() => Number) max_encounter!: number;
  @AutoMap(() => [EncounterDto]) encounter_details!: EncounterDto[];
}

export class VersionGameIndexDto {
  @AutoMap(() => Number) game_index!: number;
  @AutoMap(() => NamedAPIResourceDto) version!: NamedAPIResourceDto;
}

export class VersionGroupFlavorTextDto {
  @AutoMap(() => String) text!: string;
  @AutoMap(() => NamedAPIResourceDto) language!: NamedAPIResourceDto;
  @AutoMap(() => NamedAPIResourceDto) version_group!: NamedAPIResourceDto;
}
