import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeatherOfBeijing() {
    const url = '/rest/weather?stationid=54511&_=1668151612133';

    return this.http.get(url).pipe(
      map((res: any) => res.data.real),
      catchError(() => of({}))
    );
  }
}
