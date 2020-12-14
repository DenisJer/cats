import { createAction, props } from '@ngrx/store';
import { PageChange } from 'src/app/shared/enum/page-change.enum';
import { SortLimit } from '../enum/cats-sort-limit.enum';
import { Cats } from '../models/cats.interface';

export const CatsActions = {
  getCats: createAction('[Cats] Get Cats'),
  getCatsSuccess: createAction('[Cats] Get Cats Success', props<{ data: Cats[] }>()),
  getCatsFailure: createAction('[Cats] Get Cats Failure', props<{ error: string }>()),

  changeLimit: createAction('[Cats] Change Limit', props<{ limit: SortLimit }>()),
  changePage: createAction('[Cats] Change Page', props<{ pageChange: PageChange }>())
};
