import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FastComponent } from './fast.component';
import { FastAComponent } from './fast-a/fast-a.component';
import { FastBComponent } from './fast-b/fast-b.component';

import { FastRoutingModule } from './fast-routing.module';
import { interceptors } from './interceptors';
// import { ApiService } from './services/api.service';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, FastRoutingModule],
  declarations: [FastComponent, FastAComponent, FastBComponent],
  providers: [...interceptors],
})
export class FastModule {}
