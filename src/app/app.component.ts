import { Component } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';
import { MetaService } from './shared/service/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public url: any;
  title = 'lucienBrdClient';
  public layoutType: string = 'dark';
  public cookie: string = 'En poursuivant votre navigation sur le site, vous acceptez notre utilisation des cookies.';

  constructor(public customize: CustomizerService, private router: Router, private metaService: MetaService) {
    /* Set title + meta */
    this.metaService.setTitle('Accueil');
    this.metaService.setDescription('Lucien Burdet créateur de site internet pour les professionnels et particuliers.');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
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
