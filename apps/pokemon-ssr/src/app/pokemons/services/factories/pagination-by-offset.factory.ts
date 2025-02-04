import {
  PaginationAbstractFactory,
  PaginationByOffset,
} from '../../../core/pagination/pagination-abstract-factory';
import { FilterModel } from '../../models/filter.model';
import {
  PaginationByOffsetModel,
  PaginationModel,
} from '../../models/pagination.model';
import { map, Observable } from 'rxjs';
import { BaseListModel } from '../../models/list.model';
import { DestroyRef } from '@angular/core';

interface Pagination<A> {
  offset: number;
  limit: number;
  request: A;
}

export class PaginationByOffsetFactory<
  A,
  B extends FilterModel
> extends PaginationAbstractFactory<A, B> {
  private offset = 0;

  constructor(
    protected override readonly destroyRef: DestroyRef,
    protected override paginationInstance: PaginationByOffset<A, B>,
    protected override fetchFn: (
      pagination: PaginationByOffsetModel<B>
    ) => Observable<BaseListModel<A>>,
    protected override itemsPerPage = 90
  ) {
    super(destroyRef, paginationInstance, fetchFn, itemsPerPage);
  }

  nextPage(reset = false): void {
    if (!this.paginationInstance.request$.value) return;
    if (!this.hasNextPage || !this.fetchingState$.closed) return;

    if (reset) {
      this.offset = 0;
      this.paginationInstance.list$.next(null);
    }

    this.fetchingState$.unsubscribe();
    this.loading$.next(true);
    const request = this.paginationInstance.request$.value;
    const pagination = this.createPagination({
      request,
      limit: this.itemsPerPage,
      offset: this.offset,
    });

    this.fetchingState$ = this.fetchFn(pagination)
      .pipe(
        map((list) => {
          const currentElements = reset
            ? []
            : this.paginationInstance.list$?.value?.results ?? [];
          list.addElements(currentElements);
          return list;
        })
      )
      .subscribe({
        next: (x) => {
          this.hasNextPage = x.next !== null;
          this.paginationInstance.list$.next(x);
        },
        complete: () => {
          this.offset += this.itemsPerPage;
          this.loading$.next(false);
        },
      });
  }

  private createPagination<A>({
    request,
    limit,
    offset,
  }: Pagination<A>): PaginationModel<A> {
    return new PaginationByOffsetModel(request, limit, offset);
  }
}
