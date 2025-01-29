import { AutoMap } from "@automapper/classes";
import { Nullable } from '../../core/utils/types.utils';
import { APIResourceModel, NamedAPIResourceModel } from './utility.model';

class BaseListModel<T> {
  @AutoMap(() => Number) count = 0;
  @AutoMap(() => String) next: Nullable<string> = null;
  @AutoMap(() => String) previous: Nullable<string> = null;
  @AutoMap(() => Array) results: T[] = [];

  constructor(list: T[] = []) {
    this.results = list;
  }
}

export class PokemonNamedAPIResourceListModel extends BaseListModel<NamedAPIResourceModel>{}
export class PokemonAPIResourceListModel extends BaseListModel<APIResourceModel> {}
