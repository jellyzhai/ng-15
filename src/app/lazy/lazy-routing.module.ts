import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: 'lazy-a',
        component: LazyAComponent,
      },
      {
        path: 'lazy-b',
        component: LazyBComponent,
      },
      {
        path: '',
        redirectTo: 'lazy-a',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'lazy-a',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
