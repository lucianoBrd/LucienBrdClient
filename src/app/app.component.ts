import { Component } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public url: any;
  title = 'lucienBrdClient';
  public layoutType: string = 'dark'

  constructor(public customize: CustomizerService, private router: Router) { 
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
