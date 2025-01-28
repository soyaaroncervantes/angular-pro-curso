import { AutoMap } from '@automapper/classes';
import { Params } from '@angular/router';

export class FilterDto implements Params {}

export class FilterListDto extends FilterDto {
  @AutoMap(() => Number) limit!: number;
  @AutoMap(() => Number) offset!: number;
}
