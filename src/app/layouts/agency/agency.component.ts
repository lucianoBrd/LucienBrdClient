import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Accueil');
    this.metaService.setKeywords('Lucien Burdet créateur de site internet pour les professionnels et particuliers');
    this.metaService.setDescription('Lucien Burdet créateur de site internet pour les professionnels et particuliers.');
  }

}
