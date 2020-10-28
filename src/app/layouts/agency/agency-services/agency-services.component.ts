import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fadeInRight } from 'ng-animate';
import { Service } from 'src/app/shared/models/service.interface';

@Component({
  selector: 'app-agency-services',
  templateUrl: './agency-services.component.html',
  styleUrls: ['./agency-services.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])]
})
export class AgencyServicesComponent implements OnInit {

  fadeInRight: any;

  result: Service;

  services: Service[] = [
    { 
      id: 1,
      img: "assets/images/agency/service/web.png",
      title: "Web",
      description: "Je peux développer tous types de site : E-commerce, site vitrine, blog..."
    },
    { 
      id: 2,
      img: "assets/images/agency/service/communication.png",
      title: "Communication",
      description: "Vous ne savez pas comment bien utiliser les réseaux sociaux ? Je peux gérer vos comptes afin d’accroître votre notoriété."
    },
    { 
      id: 3,
      img: "assets/images/agency/service/ads.png",
      title: "Publicité",
      description: "Afin de d’augmenter votre présence sur internet il vous faut les meilleures publicités : image, bannière, vidéo..."
    },
    { 
      id: 4,
      img: "assets/images/agency/service/design.png",
      title: "Web design",
      description: "Je respecte les derniers standards et normes de design afin de vous proposer un produit numérique beau et fonctionnel."
    },
    { 
      id: 5,
      img: "assets/images/agency/service/logo.png",
      title: "Logo",
      description: "site"
    },
    { 
      id: 6,
      img: "assets/images/agency/service/referencement.png",
      title: "Référencement",
      description: "site"
    },
  ];

  servicesTwo: Service[] = [];
  servicesThree: Service[] = [];
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.servicesTwo[0] = this.services[1];
    this.servicesTwo[1] = this.services[2];

    this.servicesThree[0] = this.services[3];
    this.servicesThree[1] = this.services[4];
    this.servicesThree[2] = this.services[5];
  }

  openVerticallyCentered(content, id: number) {
    this.result = this.services.find(x => x.id === id);

    this.modalService.open(content, { centered: true, size: 'md' });
  }

}
