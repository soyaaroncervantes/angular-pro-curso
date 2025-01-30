import { AutoMap } from '@automapper/classes';

export class PaginationModel<T> {
  @AutoMap(() => Object) request!: T;
  @AutoMap(() => Number) limit: number = 90;
}

export class PaginationByOffsetModel<T> extends PaginationModel<T> {
  @AutoMap(() => Number) offset: number = 0;
}
