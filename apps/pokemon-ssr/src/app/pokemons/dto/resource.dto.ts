import { AutoMap } from '@automapper/classes';

export class NameResourceDto {
  @AutoMap(() => String) id!: number;
  @AutoMap(() => String) name!: string;
}

export class UnnamedResourceDto {
  @AutoMap(() => String) id!: number;
}
