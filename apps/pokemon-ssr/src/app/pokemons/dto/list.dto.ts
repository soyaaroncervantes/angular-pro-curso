import { Nullable } from '../../core/utils/types.utils';
import { AutoMap } from '@automapper/classes';

export class BaseListDto<T> {
  @AutoMap(() => String) count!: number;
  @AutoMap(() => String) next!: string;
  @AutoMap(() => String) previous!: Nullable<string>;
  @AutoMap(() => Array) results!: T[];
}
