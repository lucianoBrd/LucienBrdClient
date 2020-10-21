import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public mobile: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

}
