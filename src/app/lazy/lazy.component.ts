import { Component, OnInit } from '@angular/core';
import { LazyApiService } from './services/lazy-api.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  beijingWeather = null;

  constructor(private apiService: LazyApiService) {}

  ngOnInit(): void {}

  getWeatherOfBeijing() {
    this.apiService.getWeatherOfBeijing().subscribe((data) => {
      this.beijingWeather = data;
    });
  }

  clearWeatherOfBeijing() {
    this.beijingWeather = null;
  }
}
