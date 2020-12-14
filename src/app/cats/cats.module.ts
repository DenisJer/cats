import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatsRoutes } from './cats.routes';
import { CatsSearchModule } from './cats-search/cats-search.module';
import { StoreModule } from '@ngrx/store';
import * as fromCats from './shared/state/cats.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './shared/state/cats.effects';
import { SharedModule } from '../shared/shared.module';
import { CatDetailsModule } from './cat-details/cat-details.module';

@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CatsSearchModule,
    CatDetailsModule,
    SharedModule,
    RouterModule.forChild(CatsRoutes),
    StoreModule.forFeature(fromCats.catsFeatureKey, fromCats.reducer),
    EffectsModule.forFeature([CatsEffects]),
  ]
})
export class CatsModule { }
