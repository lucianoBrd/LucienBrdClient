import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../models/modal.interface';

@Component({
  selector: 'app-agency-copyright',
  templateUrl: './agency-copyright.component.html',
  styleUrls: ['./agency-copyright.component.scss']
})
export class AgencyCopyrightComponent implements OnInit {
  public year: number = new Date().getFullYear();
  public result: Modal;

  public modals: Modal[] = [
    { 
      id: 1,
      title: "Politique de confidentialité",
      description: "Je peux développer tous types de site : E-commerce, site vitrine, blog..."
    },
    { 
      id: 2,
      title: "Termes & Conditions",
      description: "Vous ne savez pas comment bien utiliser les réseaux sociaux ? Je peux gérer vos comptes afin d’accroître votre notoriété."
    },
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  

  openVerticallyCentered(content, id: number) {
    this.result = this.modals.find(x => x.id === id);

    this.modalService.open(content, { centered: true, size: 'md' });
  }

}
