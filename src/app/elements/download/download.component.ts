import { Component, OnDestroy, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/service/meta.service';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';
import { FormService } from 'src/app/shared/service/form.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/shared/service/language.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  providers: [DataService]
})
export class DownloadComponent implements OnInit, OnDestroy {
  public language: Language;

  private sub: any;

  public file: String;
  
  private name: String;
  private email: String;
  private captcha: String;

  public error: Boolean;
  public errorMail: Boolean;
  public sending: Boolean;
  public hasSent: Boolean;
  public hasSentError: Boolean;

  public siteKey: String;

  constructor(
    private dataService: DataService, 
    private metaService: MetaService, 
    private textService: TextService,
    private formService: FormService,
    private route: ActivatedRoute,
    private alertService: AlertService,
  ) { 
    this.language = this.textService.getTextByLocal();
    this.siteKey = this.formService.getSiteKey();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.download);
    this.metaService.setKeywords(this.language.download);
    this.metaService.setDescription(this.language.download);

    this.sub = this.route.params.subscribe(params => {
      this.error = false;
      this.errorMail = false;
      this.sending = false;
      this.hasSent = false;
      this.hasSentError = false;

      /* Get file */
      this.file = params['file'];
      if (!this.file) {
        this.error = true;
        this.alertService.showError(this.language.contactError);
      } else {
        /* Set title + meta */
        this.metaService.setTitle(this.language.download + ' ' + this.file);
        this.metaService.setKeywords(this.language.download + ', ' + this.file);
        this.metaService.setDescription(this.language.download + ' ' + this.file);
      }
    });
    
  }

  onFormSubmit(downloadForm: NgForm) {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;

    if (downloadForm.valid && this.captcha && this.file) {
      this.name = downloadForm.controls['name'].value;
      this.email = downloadForm.controls['email'].value;

      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        this.dataService.PARAMS = {
          captcha: this.captcha, 
          name: this.name, 
          mail: this.email, 
          file: this.file,
        };
        this.dataService.PAGE = '/download/' + LanguageService.getLanguageCodeOnly();
        this.dataService.sendGetRequest().subscribe((data: any[]) => {
          if (data['error'] == true) {
            this.hasSentError = true;
            this.alertService.showError(this.language.contactError);
          } else {
            this.hasSent = true;
            this.alertService.showSuccess(this.language.receiveSuccess);
            downloadForm.resetForm();
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
