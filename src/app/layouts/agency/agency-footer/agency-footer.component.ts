import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/shared/models/social.interface';

@Component({
  selector: 'app-agency-footer',
  templateUrl: './agency-footer.component.html',
  styleUrls: ['./agency-footer.component.scss']
})
export class AgencyFooterComponent implements OnInit {

  socials: Social[] = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/lucien-burdet-b8b76a153',
      fa: 'linkedin'
    },
    {
      id: 2,
      link: 'https://github.com/lucianoBrd',
      fa: 'git'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
