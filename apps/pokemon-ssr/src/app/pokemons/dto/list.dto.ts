import { Nullable } from '../../core/utils/types.utils';
import { AutoMap } from '@automapper/classes';

class BaseListDto {
  @AutoMap(() => String) count!: number;
  @AutoMap(() => String) next!: string;
  @AutoMap(() => String) previous!: Nullable<string>;
}

export class NamedResourceListDto extends  BaseListDto {
  @AutoMap(() => String) name!: string;
  @AutoMap(() => String) url!: string;
}

export class UnnamedResourceListDto extends BaseListDto {
  @AutoMap(() => String) url!: string;
}
