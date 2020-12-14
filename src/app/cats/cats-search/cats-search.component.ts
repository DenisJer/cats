import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageChange } from 'src/app/shared/enum/page-change.enum';
import { SortLimit } from '../shared/enum/cats-sort-limit.enum';
import { CatsActions } from '../shared/state/cats.actions';
import { selectCatsData, selectCatsLoading, selectCatsSortLimit } from '../shared/state/cats.selectors';

@Component({
  selector: 'app-cats-search',
  templateUrl: './cats-search.component.html'
})
export class CatsSearchComponent implements OnInit {
  loading$ = this.store.select(selectCatsLoading);
  catsData$ = this.store.select(selectCatsData);
  sortLimit$ = this.store.select(selectCatsSortLimit);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(CatsActions.getCats());
  }

  onLimitChange(limit: SortLimit): void {
    this.store.dispatch(CatsActions.changeLimit({ limit }));
  }

  onPageChange(pageChange: PageChange): void {
    this.store.dispatch(CatsActions.changePage({ pageChange }));
  }
}
