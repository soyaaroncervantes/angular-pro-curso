import { AutoMap } from '@automapper/classes';
import { NamedResourceListDto } from './list.dto';

export class AbilityDto {
  @AutoMap(() => String) id!: number;
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) is_main_series!: boolean;
  @AutoMap(() => NamedResourceListDto) generation!: NamedResourceListDto;
  @AutoMap(() => Array) names!: NameDTO[];

}

export class NameDTO {
  @AutoMap(() => Number) name!: string;
  @AutoMap(() => NamedResourceListDto) language!: NamedResourceListDto;
}
