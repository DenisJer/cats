import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './components/sorting/sorting.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpinnerComponent, SortingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SpinnerComponent,
    SortingComponent
  ]
})
export class SharedModule { }
