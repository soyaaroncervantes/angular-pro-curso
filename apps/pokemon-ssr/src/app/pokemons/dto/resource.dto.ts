import { AutoMap } from '@automapper/classes';

export class NamedResourceDto {
  @AutoMap(() => Number) id!: number;
  @AutoMap(() => String) name!: string;
}

export class ResourceDto {
  @AutoMap(() => Number) id!: number;
}
