import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { ApiService } from './services/api.service';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
/*     trigger('openClose', [
      state(
        'open',
        style({
          height: '500px',
          opacity: 1,
          backgroundColor: 'gainsboro',
        })
      ),
      state(
        'closed',
        style({
          height: '68px',
          opacity: 0.5,
          backgroundColor: 'pink',
        })
      ),
      // transition('open => closed', [animate('1s')]),
      // transition('closed => open', [animate('0.5s')]),

      transition('* => open', [animate('1s')]),
      transition('*=> closed', [animate('0.5s')]),
    ]), */
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
    /* trigger('insertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '300ms',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]), */
  ],
})
export class AppComponent implements OnInit {
  supportedLangs: string[] = [];
  currentLang = '';
  PI = Math.PI;

  beijingWeather: Object | null = null;
  location!: any;

  constructor(
    private langService: LangService,
    private apiService: ApiService
  ) {
    this.langService.initLang();
  }

  ngOnInit(): void {
    this.location = window.location;
    this.supportedLangs = this.langService.getConfiguredLangs();
    this.currentLang = this.langService.getCurrentLang();
  }

  changeLang(lang: string) {
    this.langService.setCurrentLang(lang);
    this.currentLang = lang;
  }

  getWeatherOfBeijing() {
    this.apiService.getWeatherOfBeijing().subscribe((data) => {
      this.beijingWeather = data;
    });
  }

  clearWeatherOfBeijing() {
    this.beijingWeather = null;
  }
}
