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
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface BasePagination<A, B extends FilterModel> {
  list$: BehaviorSubject<Nullable<BaseListModel<A>>>;
  request$: BehaviorSubject<Nullable<B>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface PaginationByOffset<A, B extends FilterModel> extends BasePagination<A, B>{}

export abstract class PaginationAbstractFactory<A, B extends FilterModel> {
  readonly loading$ = new Subject<boolean>();
  protected fetchingState$ = new Subscription();
  protected hasNextPage = true;

  protected constructor(
    protected readonly destroyRef: DestroyRef,
    protected paginationInstance: PaginationByOffset<A, B>,
    protected fetchFn: (pagination: PaginationModel<B>) => Observable<BaseListModel<A>>,
    protected itemsPerPage = 90
  ) {
    this.fetchingState$.unsubscribe();
    this.paginationInstance.list$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((list) => list !== null),
      )
      .subscribe(() => this.nextPage(true));
  }

  abstract nextPage(reset: boolean): void;
}




