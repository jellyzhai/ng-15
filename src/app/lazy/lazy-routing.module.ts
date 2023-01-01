import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyCComponent } from './lazy-c/lazy-c.component';
import { LazyCFirstComponent } from './lazy-c/lazy-c-first/lazy-c-first.component';
import { LazyCSecondComponent } from './lazy-c/lazy-c-second/lazy-c-second.component';
import { SaveFormGuard } from './guard/save-form.guard';
import { UserNameResolver } from './resolver/user-name.resolver';

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
        path: 'lazy-b/:name',
        component: LazyBComponent,
        canDeactivate: [SaveFormGuard]
      },
      {
        path: 'lazy-c',
        component: LazyCComponent,
        data: {
          info: '2个路由组件同时显示'
        },
        resolve: {
          userName: UserNameResolver
        },
        children: [
          {
            path: 'first',
            component: LazyCFirstComponent,
            outlet: 'first',
          },
          {
            path: 'second',
            component: LazyCSecondComponent,
            outlet: 'second',
          },
        ],
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
