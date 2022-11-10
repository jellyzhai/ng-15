import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LazyComponent } from './lazy.component';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { interceptors } from './interceptors';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, LazyRoutingModule],
  declarations: [LazyComponent, LazyAComponent, LazyBComponent],
  providers: [...interceptors],
})
export class LazyModule {}
