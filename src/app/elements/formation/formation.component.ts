import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/layouts/agency/models/formation.interface';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
//TODO stage
  formations: Formation[] = [
    { 
      id: 1,
      date: "2019",
      place: "CPE Lyon",
      type: "Diplôme d’ingénieur en informatique et réseaux de communication (apprentissage)",
      img: "assets/images/page/formation/cpe.png"
    },
    { 
      id: 2,
      date: "De 2017 à 2019",
      place: "IUT Lyon 1",
      type: "DUT Informatique",
      img: "assets/images/page/formation/iut.png"
    },
    { 
      id: 3,
      date: "2017",
      place: "Miribel",
      type: "Permis B",
      img: "assets/images/page/formation/permis.png"
    },
    { 
      id: 4,
      date: "De 2015 à 2017",
      place: "Lycée de la Cotière",
      type: "Baccalauréat, Sciences de l’Ingénieur, Mention Bien.",
      img: "assets/images/page/formation/bac.png"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
