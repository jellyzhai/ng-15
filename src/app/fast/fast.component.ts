import { Component, OnInit } from '@angular/core';
import { FastApiService } from './services/fast-api.service';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css'],
})
export class FastComponent implements OnInit {
  beijingWeather = {};

  constructor(private apiService: FastApiService) {}

  ngOnInit() {}

  getComingSoongFilms() {
    this.apiService.getWeatherOfBeijing().subscribe((data) => {
      this.beijingWeather = data;
    });
  }
}
