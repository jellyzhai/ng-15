import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FastComponent } from './fast.component';
import { FastAComponent } from './fast-a/fast-a.component';
import { FastBComponent } from './fast-b/fast-b.component';

const routes: Routes = [
  {
    path: 'fast',
    component: FastComponent,
    children: [
      {
        path: 'fast-a',
        component: FastAComponent,
      },
      {
        path: 'fast-b',
        component: FastBComponent,
      },
      {
        path: '',
        redirectTo: 'fast-a',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'fast-a',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastRoutingModule {}
