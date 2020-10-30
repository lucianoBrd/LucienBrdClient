import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DataService]
})
export class ContactComponent implements OnInit {
  private name: String;
  private email: String;
  private message: String;

  public error: Boolean;
  public errorMail: Boolean;
  public sending: Boolean;
  public hasSent: Boolean;
  public hasSentError: Boolean;

  constructor(private dataService: DataService, private metaService: MetaService) { }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Contact');
    this.metaService.setDescription('Je peux vous établir gratuitement un devis sur simple demande. La satisfaction du client étant ma priorité, je mettrai tout en œuvre pour répondre à vos attentes et exigences.');

    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;
  }

  onFormSubmit(contactForm: NgForm) {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;

    if (contactForm.valid) {
      this.name = contactForm.controls['name'].value;
      this.email = contactForm.controls['email'].value;
      this.message = contactForm.controls['message'].value;

      if (this.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        this.dataService.PAGE = '/contact/' + this.name + '/' + this.email + '/' + this.message;
        this.dataService.sendGetRequest().subscribe((data: any[]) => {
          if (data['error']) {
            this.hasSentError = true;
          } else {
            this.hasSent = true;
            contactForm.resetForm();
          }
          this.sending = false;

        });

      } else {
        this.errorMail = true;
      }
    } else {
      this.error = true;
    }
  }

  private ValidateEmail(mail: String) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

}
