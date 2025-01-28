import { AutoMap } from '@automapper/classes';
import { ParamMap, Params } from '@angular/router';

export class FilterModel implements Params {}

export class FilterListModel extends FilterModel {
  @AutoMap(() => Number) limit = 90;
  @AutoMap(() => Number) offset = 0;

  constructor(params?: ParamMap) {
    super();
    this.limit = parseInt(params?.get('limit')?.toString() ?? this.limit.toString())
    this.offset = parseInt(params?.get('offset')?.toString() ?? this.offset.toString())
  }
}

