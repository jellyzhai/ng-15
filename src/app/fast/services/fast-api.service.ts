import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FastApiService {
  constructor(private http: HttpClient) {}

  getComingSoon() {
    const url = '/rest/province/ABJ?_=1667994741713';

    return this.http.get(url).pipe(
      map((res: any) => res.data),
      catchError(() => of({}))
    );
  }
}
