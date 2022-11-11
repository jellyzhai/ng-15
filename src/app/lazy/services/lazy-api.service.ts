import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  // 每个惰性加载的模块中提供一个唯一实例。如果急性热加载模块中的服务也这样设置的话，所有热加载的模块共享一个实例。
  providedIn: 'any',
})
export class LazyApiService {
  constructor(private http: HttpClient) {}

  getWeatherOfBeijing() {
    const url = '/rest/weather?stationid=54511&_=1668151612133';

    return this.http.get(url).pipe(
      map((res: any) => res.data.real),
      catchError(() => of({}))
    );
  }
}
