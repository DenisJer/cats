import { Routes } from '@angular/router';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatsPaths } from './cats-paths.const';
import { CatsSearchComponent } from './cats-search/cats-search.component';
import { CatsComponent } from './cats.component';

export const CatsRoutes: Routes = [
  {
    path: '',
    component: CatsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: CatsPaths.search.path
      },
      { path: CatsPaths.search.path, component: CatsSearchComponent },
      { path: CatsPaths.catDetails.path, component: CatDetailsComponent }
    ]
  }
];
