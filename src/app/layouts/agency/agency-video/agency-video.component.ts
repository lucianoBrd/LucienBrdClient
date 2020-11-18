import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-video',
  templateUrl: './agency-video.component.html',
  styleUrls: ['./agency-video.component.scss']
})
export class AgencyVideoComponent implements OnInit {
  public language: Language;
  private url: string;
  public safeUrl: SafeResourceUrl;

  constructor(private modalService: NgbModal, private textService: TextService, private sanitizer: DomSanitizer) { 
    this.language = this.textService.getTextByLocal();
    this.url = '//www.youtube.com/embed/' + this.language.youtube + '?autoplay=1';
  }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url); ;
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
