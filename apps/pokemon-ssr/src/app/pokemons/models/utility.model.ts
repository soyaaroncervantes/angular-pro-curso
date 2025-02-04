import { AutoMap } from '@automapper/classes';
import { Nullable } from '../../core/utils/types.utils';

export class NamedAPIResourceModel {
  @AutoMap(() => String) name: Nullable<string> = null;
  @AutoMap(() => URL) url: Nullable<URL> = null;
}

export class APIResourceModel {
  @AutoMap(() => URL) url: Nullable<URL> = null;
}

export class DescriptionModel {
  @AutoMap(() => String) description = ''
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
}

export class EffectModel {
  @AutoMap(() => String) effect = ''
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
}

export class EncounterModel {
  @AutoMap(() => Number) minLevel = 0;
  @AutoMap(() => Number) maxLevel = 0;
  @AutoMap(() => [NamedAPIResourceModel]) conditionValues: NamedAPIResourceModel[] = [];
  @AutoMap(() => Number) chance = 0;
  @AutoMap(() => NamedAPIResourceModel) method: Nullable<NamedAPIResourceModel> = null;
}

export class FlavorTextModel {
  @AutoMap(() => String) flavorText = ''
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
  @AutoMap(() => NamedAPIResourceModel) version: Nullable<NamedAPIResourceModel> = null;
}

export class GenerationGameIndexModel {
  @AutoMap(() => Number) gameIndex = 0;
  @AutoMap(() => NamedAPIResourceModel) generation: Nullable<NamedAPIResourceModel> = null;
}

export class MachineVersionDetailModel {
  @AutoMap(() => APIResourceModel) machine: Nullable<APIResourceModel> = null;
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
}

export class NameModel {
  @AutoMap(() => String) name: Nullable<string> = null;
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
}

export class VerboseEffectModel {
  @AutoMap(() => String) shortEffect = ''
  @AutoMap(() => String) effect = ''
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
}

export class VersionEncounterDetailModel {
  @AutoMap(() => NamedAPIResourceModel) version: Nullable<NamedAPIResourceModel> = null;
  @AutoMap(() => Number) maxEncounter = 0;
  @AutoMap(() => [EncounterModel]) encounterDetails: EncounterModel[] = [];
}

export class VersionGameIndexModel {
  @AutoMap(() => Number) gameIndex = 0;
  @AutoMap(() => NamedAPIResourceModel) version: Nullable<NamedAPIResourceModel> = null;
}

export class VersionGroupFlavorTextModel {
  @AutoMap(() => String) text = ''
  @AutoMap(() => NamedAPIResourceModel) language: Nullable<NamedAPIResourceModel> = null;
  @AutoMap(() => NamedAPIResourceModel) versionGroup: Nullable<NamedAPIResourceModel> = null;
}
