import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  static getLanguageCodeOnly() {
    var languageCode: String[] = this.getBrowserLocales({ languageCodeOnly: true });
    if (languageCode) {
      var language = languageCode[0];
      if (language != 'fr'){
        return 'en';
      }
      return language;
    }
    return 'en';
  }

  static getLanguage() {
    var language: String[] = this.getBrowserLocales();
    if (language) {
      var languageCode = this.getLanguageCodeOnly();
      if (languageCode != 'fr'){
        return 'en-EN';
      }
      return language[0];
    }
    return 'en-EN';
  }

  static getBrowserLocales(options = {}) {
    var defaultOptions = {
      languageCodeOnly: false,
    };

    var opt = {
      ...defaultOptions,
      ...options,
    };

    var browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;

    if (!browserLocales) {
      return undefined;
    }

    return browserLocales.map(locale => {
      var trimmedLocale = locale.trim();

      return opt.languageCodeOnly
        ? trimmedLocale.split(/-|_/)[0]
        : trimmedLocale;
    });
  }

}
