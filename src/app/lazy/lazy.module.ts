import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LazyComponent } from './lazy.component';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { interceptors } from './interceptors';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NgZoneDemo } from './components/ng-zone-demo/ng-zone-demo';
import { FirstContentComponent } from './components/first-content/first-content.component';
import { DefaultContentComponent } from './components/default-content/default-content.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    LazyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LazyComponent,
    LazyAComponent,
    LazyBComponent,
    ParentComponent,
    ChildComponent,
    NgZoneDemo,
    FirstContentComponent,
    DefaultContentComponent,
  ],
  providers: [...interceptors],
})
export class LazyModule {}
