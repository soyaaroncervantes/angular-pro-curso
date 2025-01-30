import {
  BehaviorSubject,
  filter,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { FilterModel } from '../../pokemons/models/filter.model';
import { Nullable } from '../utils/types.utils';
import { BaseListModel } from '../../pokemons/models/list.model';
import { PaginationModel } from '../../pokemons/models/pagination.model';

export interface BasePagination<A, B extends FilterModel> {
  list$: BehaviorSubject<Nullable<BaseListModel<A>>>;
  request$: BehaviorSubject<Nullable<B>>;
}

export type PaginationByOffset<A, B extends FilterModel> = BasePagination<A, B>;

export abstract class PaginationAbstractFactory<A, B extends FilterModel> {
  readonly loading$ = new Subject<boolean>();
  protected fetchingState$ = new Subscription();
  protected hasNextPage = false;

  protected constructor(
    protected paginationInstance: PaginationByOffset<A, B>,
    protected fetchFn: (pagination: PaginationModel<B>) => Observable<A>,
    protected itemsPerPage = 90
  ) {
    this.fetchingState$.unsubscribe();
    this.paginationInstance.list$
      .pipe(filter((list) => list !== null))
      .subscribe(() => this.nextPage(true));
  }

  abstract nextPage(reset: boolean): void;
}




