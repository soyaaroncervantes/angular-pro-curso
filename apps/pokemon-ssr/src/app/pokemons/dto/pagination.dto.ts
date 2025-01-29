import { AutoMap } from '@automapper/classes';

class PaginationDto<T> {
  @AutoMap(() => Object) request!: T;
  @AutoMap(() => Number) limit!: number;
}

export class PaginationByOffsetDto<T> extends PaginationDto<T> {
  @AutoMap(() => Number) offset!: number;
}
