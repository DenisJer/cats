import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCats from '../cats/shared/state/cats.reducer';
export interface AppState {
  cats: fromCats.CatsState;
}

export const reducers: ActionReducerMap<AppState> = {
  cats: fromCats.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
