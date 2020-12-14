import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CatsService } from '../services/cats.service';
import { CatsActions } from './cats.actions';
import { selectCatsSortLimit, selectCatsSearchPageNumber } from './cats.selectors';

@Injectable()
export class CatsEffects {

  getCats$ = createEffect(() => this.actions$.pipe(
    ofType(CatsActions.getCats),
    withLatestFrom(
      this.store.select(selectCatsSortLimit),
      this.store.select(selectCatsSearchPageNumber)
    ),
    switchMap(([, limit, pageNumber]) => this.catsService.getCats(limit, pageNumber).pipe(
      map(data => CatsActions.getCatsSuccess({ data })),
      catchError(error => of(CatsActions.getCatsFailure({ error: error.error.messages }))))
    )
  ));

  changeLimit$ = createEffect(() => this.actions$.pipe(
    ofType(CatsActions.changeLimit),
    map(() => CatsActions.getCats())
  ));

  changePage$ = createEffect(() => this.actions$.pipe(
    ofType(CatsActions.changePage),
    map(() => CatsActions.getCats())
  ));

  constructor(
    private actions$: Actions,
    private catsService: CatsService,
    private store: Store
  ) { }

}
