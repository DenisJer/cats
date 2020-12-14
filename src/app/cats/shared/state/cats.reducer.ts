import { createReducer, on } from '@ngrx/store';
import { PaginationUtils } from 'src/app/shared/utils/pagination.util';
import { SortLimit } from '../enum/cats-sort-limit.enum';
import { Cats } from '../models/cats.interface';
import { CatsActions } from './cats.actions';

export const catsFeatureKey = 'cats';

export interface CatsState {
  loading: boolean;
  data?: Cats[];
  errorMessage?: string;
  limit: SortLimit;
  pageNumber: number;
}

export const initialState: CatsState = {
  loading: false,
  limit: SortLimit.Ten,
  pageNumber: 0
};


export const reducer = createReducer(
  initialState,

  on(CatsActions.getCats, state => ({ ...state, loading: true, errorMessage: undefined })),
  on(CatsActions.getCatsSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(CatsActions.getCatsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(CatsActions.changeLimit, (state, { limit }) => ({ ...state, limit })),
  on(CatsActions.changePage, (state, { pageChange }) =>
    ({
      ...state,
      pageNumber: PaginationUtils.calculatePageNumber(pageChange, state.pageNumber)
    }))
);

