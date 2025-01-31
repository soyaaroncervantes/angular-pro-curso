import { AutoMap } from '@automapper/classes';

export class PaginationModel<T> {
  @AutoMap(() => Object) request!: T;
  @AutoMap(() => Number) limit: number = 90;

  constructor(request: T, limit: number) {
    this.request = request;
    this.limit = limit;
  }
}

export class PaginationByOffsetModel<T> extends PaginationModel<T> {
  @AutoMap(() => Number) offset? = 0;

  constructor(request: T, limit: number, offset: number) {
    super(request, limit);
    this.offset = offset;
  }
}
