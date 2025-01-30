import { Params } from '@angular/router';
import { PaginationByOffsetModel } from './pagination.model';

export class FilterModel implements Params {}
export class PaginationFilterModel extends FilterModel {}

export class PokemonPaginationFilterModel extends PaginationByOffsetModel<PaginationFilterModel> {}
