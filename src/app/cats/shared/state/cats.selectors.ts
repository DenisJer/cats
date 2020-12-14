import { createFeatureSelector, createSelector } from '@ngrx/store';
import { catsFeatureKey, CatsState } from './cats.reducer';

export const selectCatsState = createFeatureSelector<CatsState>(
  catsFeatureKey
);

export const selectCatsLoading = createSelector(
  selectCatsState,
  state => state.loading
);

export const selectCatsData = createSelector(
  selectCatsState,
  state => state.data
);

export const selectCatsErrorMessage = createSelector(
  selectCatsState,
  state => state.errorMessage
);

export const selectCatsSortLimit = createSelector(
  selectCatsState,
  state => state.limit
);

export const selectCatsSearchPageNumber = createSelector(
  selectCatsState,
  state => state.pageNumber
);
