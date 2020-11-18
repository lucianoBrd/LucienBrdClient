import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DataService]
})
export class ContactComponent implements OnInit {
  public language: Language;
  
  private name: String;
  private email: String;
  private message: String;
  private captcha: String;

  public error: Boolean;
  public errorMail: Boolean;
  public sending: Boolean;
  public hasSent: Boolean;
  public hasSentError: Boolean;

  public siteKey: String = '6LfWON0ZAAAAABVgPLWN-KFJXz2byUnwPzp2Z8oC';

  constructor(private dataService: DataService, private metaService: MetaService, private textService: TextService) { 
    this.language = textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.contact);
    this.metaService.setKeywords(this.language.contact + ', ' + this.language.contactDesc);
    this.metaService.setDescription(this.language.contactDesc);

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

    if (contactForm.valid && this.captcha) {
      this.name = contactForm.controls['name'].value;
      this.email = contactForm.controls['email'].value;
      this.message = contactForm.controls['message'].value;

      if (this.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        this.dataService.PARAMS = {
          captcha: this.captcha, 
          name: this.name, 
          mail: this.email, 
          message: this.message
        };
        this.dataService.PAGE = '/contact';
        this.dataService.sendGetRequest().subscribe((data: any[]) => {
          if (data['error'] == true) {
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

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
  }

  private ValidateEmail(mail: String) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

}
