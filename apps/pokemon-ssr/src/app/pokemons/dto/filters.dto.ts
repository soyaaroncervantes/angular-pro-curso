import { NamedResourceDto, UnnamedResourceDto } from './resource.dto';
import { AutoMap } from '@automapper/classes';

export type NamedFilterDto = NamedResourceDto;
export type UnnamedFilterDto = UnnamedResourceDto;

export class FilterListDto {
  @AutoMap(() => Number) limit!: number;
  @AutoMap(() => Number) offset!: number;
}
