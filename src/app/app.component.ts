import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  supportedLangs: string[] = [];
  currentLang = '';
  PI = Math.PI;

  beijingWeather = {};

  constructor(
    private langService: LangService,
    private apiService: ApiService
  ) {
    this.langService.initLang();
  }

  ngOnInit(): void {
      this.supportedLangs = this.langService.getConfiguredLangs();
      this.currentLang = this.langService.getCurrentLang();
  }

  changeLang(lang: string) {
    this.langService.setCurrentLang(lang);
    this.currentLang = lang;
  }

  getComingSoongFilms() {
    this.apiService.getWeatherOfBeijing().subscribe(data => {
      this.beijingWeather = data;
    });
  }
}
