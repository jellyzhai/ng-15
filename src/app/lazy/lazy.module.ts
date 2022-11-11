import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { LazyComponent } from './lazy.component';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { interceptors } from './interceptors';

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule, LazyRoutingModule],
  declarations: [LazyComponent, LazyAComponent, LazyBComponent],
  providers: [...interceptors],
})
export class LazyModule {}
