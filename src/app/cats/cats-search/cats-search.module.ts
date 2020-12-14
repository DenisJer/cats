import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatsSearchComponent } from './cats-search.component';



@NgModule({
  declarations: [CatsSearchComponent, CatsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [CatsSearchComponent]
})
export class CatsSearchModule { }
