import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/shared/models/social.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  age: number = this.ageFromDateOfBirthday('08/06/1999');
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

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
