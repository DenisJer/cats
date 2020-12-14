import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDetailsComponent } from './cat-details.component';
import { CatDetailsViewComponent } from './cat-details-view/cat-details-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatDetailsComponent, CatDetailsViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CatDetailsModule { }
