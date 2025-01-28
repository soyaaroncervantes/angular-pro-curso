import { AutoMap } from '@automapper/classes';

export class NamedResourceModel {
  @AutoMap(() => Number) id!: number;
  @AutoMap(() => String) name!: string;
}

export class UnnamedResourceDto {
  @AutoMap(() => Number) id!: number;
}
