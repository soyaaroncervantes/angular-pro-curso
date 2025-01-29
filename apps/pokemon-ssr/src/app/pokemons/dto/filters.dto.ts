import { Params } from '@angular/router';
import { PaginationByOffsetDto } from './pagination.dto';

export class FilterDto implements Params {}
export class PaginationFilterDto extends FilterDto {}

export class PokemonPaginationFilterDto extends PaginationByOffsetDto<PaginationFilterDto> {}
