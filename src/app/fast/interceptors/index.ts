import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FastAuthInterceptor } from './fast-auth.interceptor';

export const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: FastAuthInterceptor, multi: true },
];
