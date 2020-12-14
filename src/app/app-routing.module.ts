import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsPaths } from './cats/cats-paths.const';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: CatsPaths.root.path
      },
      {
        path: CatsPaths.root.path,
        loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule)
      }
    ]
  },
  /* Match anything else and redirect to start page */
  {
    path: '**',
    redirectTo: CatsPaths.root.path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
