import { ParamMap, Params } from '@angular/router';
import { PaginationByOffsetModel } from './pagination.model';

export class FilterModel implements Params {}
export class PaginationFilterModel extends FilterModel {
  constructor(params: ParamMap) {
    console.log({keys: params.keys });
    super();
  }
}

export class PokemonPaginationFilterModel extends PaginationByOffsetModel<PaginationFilterModel> {}
