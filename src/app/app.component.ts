import { Component } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public url: any;
  title = 'lucienBrdClient';
  public layoutType: string = 'dark'

  constructor(public customize: CustomizerService, private router: Router, private titleService: Title, private metaService: Meta) {
    this.setTitle("Lucien Burdet");
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Lucien Burdet créateur de site internet pour les professionnels et particuliers.'
      }
    );
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  customizeLayoutVersion(val) {
    this.customize.setLayoutVersion(val)
    this.layoutType = val
  }

  customizeLayoutType(val) {
    this.customize.setLayoutType(val)
    this.layoutType = val
  }


}
