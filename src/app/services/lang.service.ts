import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IConfiguredLangs } from '../types/lang.type';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private langs: IConfiguredLangs = ['en', 'zh'];
  private currentLang = '';

  constructor(private translate: TranslateService) {}

  getConfiguredLangs(): string[] {
    return this.langs;
  }

  initLang(): void {
    this.translate.addLangs(this.langs);

    const browserLang: any = this.translate.getBrowserLang() ?? 'zh';

    console.log(
      'this.translate.getBrowserLang(): ',
      this.translate.getBrowserLang()
    );

    this.currentLang = this.langs.includes(browserLang) ? browserLang : 'zh';

    this.translate.use(this.currentLang);
  }

  getCurrentLang() {
    return this.currentLang;
  }

  setCurrentLang(lang: string) {
    this.translate.use(lang);
  }
}
