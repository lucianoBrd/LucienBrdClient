import { Injectable } from '@angular/core';
import { ConfigDB } from '../data/config';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {
  private languageCode: string;

  constructor() {
    /* Set local of navigator */
    this.languageCode = LanguageService.getLanguageCodeOnly();
    this.data.settings.languageCode = this.languageCode;

    var layoutVersion = localStorage.getItem("layoutVersion") || this.data.settings.layout_version;
    var layoutType = localStorage.getItem("layoutType") || this.data.settings.layout_type;
    var lc = localStorage.getItem("languageCode") || this.data.settings.languageCode;
    if (layoutVersion) {
      document.body.classList.add(layoutVersion);
      this.data.settings.layout_version = layoutVersion;
    }
    if (layoutType){
      document.body.classList.add(layoutType);
    }
    if (lc){
      this.data.settings.languageCode = lc;
    }
  }

  // Configration Layout
  public data = ConfigDB.data

  // Set Customize layout Version
  setLayoutVersion(layout) {
    document.body.classList.remove(this.data.settings.layout_version);
    this.data.settings.layout_version = layout;
    document.body.classList.add(layout);
    localStorage.setItem('layoutVersion', layout);
  }

  setLayoutType(layout) {
    document.body.classList.remove(this.data.settings.layout_type);
    this.data.settings.layout_type = layout;
    document.body.classList.add(layout);
    localStorage.setItem('layoutType', layout);
  }

  setLanguage(language) {
    this.data.settings.languageCode = language;
    localStorage.setItem('languageCode', language);
  }

}
