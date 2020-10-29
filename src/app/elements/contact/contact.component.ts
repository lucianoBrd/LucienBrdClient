import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Contact');
    this.metaService.setDescription('Je peux vous établir gratuitement un devis sur simple demande. La satisfaction du client étant ma priorité, je mettrai tout en œuvre pour répondre à vos attentes et exigences.');

  }

}
