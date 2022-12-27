import { Component, OnInit } from '@angular/core';
import {
  formatDate,
  getCurrencySymbol,
  getLocaleCurrencyCode,
  KeyValue,
} from '@angular/common';
import { FastApiService } from './services/fast-api.service';
import { JsonServerApiService } from './services/json-server-api.service';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Student {
  name: string;
  age: number;
}

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css'],
})
export class FastComponent implements OnInit {
  student = { name: 'tom', age: 18 };
  studentSubject = new BehaviorSubject<undefined | Student>(undefined);
  studentSubject$ = this.studentSubject.asObservable();

  templateContext = {
    $implicit: {
      city: '',
      weatherInfo: '',
      temperature: '',
      direct: '',
      power: '',
    },
  };

  beijingWeather = null;

  updatedData = {
    posts: {
      title: String.fromCharCode(48 + Math.random() * (122 - 48)),
      author: String.fromCharCode(48 + Math.random() * (122 - 48)),
    },
    comments: {
      body: String.fromCharCode(48 + Math.random() * (122 - 48)),
      postId: Math.random() > 0.5 ? 2 : 1,
    },
  };

  get currentTime() {
    return Date.now();
  }

  get randomState(): string {
    return Math.floor(Math.random() * 3).toString();
  }

  constructor(
    private apiService: FastApiService,
    private jsonServerApi: JsonServerApiService
  ) {}

  ngOnInit() {
    const currencySymbol = getCurrencySymbol('CNY', 'narrow');
    const currencyCode = getLocaleCurrencyCode('en');
    // console.log(currencySymbol) // ¥
    // console.log(currencyCode) // USD

    setTimeout(() => {
      this.studentSubject.next(this.student);
    }, 1000);
  }

  updateState(): void {
    const data = { 0: this.student, 1: null, 2: undefined };
    this.studentSubject.next(Reflect.get(data, this.randomState));
  }

  getWeatherOfBeijing() {
    this.apiService.getWeatherOfBeijing().subscribe((data) => {
      this.beijingWeather = data;

      this.templateContext = {
        $implicit: {
          city: data.station.city,
          weatherInfo: data.weather.info,
          temperature: data.weather.temperature + '°',
          direct: data.wind.direct,
          power: data.wind.power,
        },
      };
    });
  }

  clearWeatherOfBeijing() {
    this.beijingWeather = null;
  }

  getData(url: string) {
    this.jsonServerApi.getData(url).subscribe(console.log);
  }

  queryAssociatedSubData() {
    this.jsonServerApi.queryAssociatedSubData().subscribe(console.log);
  }

  queryAssociatedParentData() {
    this.jsonServerApi.queryAssociatedParentData().subscribe(console.log);
  }

  addData(url: any) {
    const body = this.updatedData[url as 'posts' | 'comments'];
    this.jsonServerApi.addData(url, body).subscribe(console.log);
  }

  putUpdate(url: any) {
    const body = this.updatedData[url as 'posts' | 'comments'];
    this.jsonServerApi.putUpdate(url, body).subscribe(console.log);
  }

  patchUpdate(url: any) {
    const body = this.updatedData[url as 'posts' | 'comments'];
    this.jsonServerApi.patchUpdate(url, body).subscribe(console.log);
  }

  deleteData(url: any) {
    this.jsonServerApi.deleteData(url).subscribe(console.log);
  }
}
