import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { AlertService } from 'src/app/shared/service/alert.service';
import { DataService } from 'src/app/shared/service/data.service';
import { FormService } from 'src/app/shared/service/form.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-footer',
  templateUrl: './agency-footer.component.html',
  styleUrls: ['./agency-footer.component.scss'],
  providers: [DataService]
})
export class AgencyFooterComponent implements OnInit, OnDestroy {

  public socials: Social[] = [];
  public language: Language;

  private email: String;

  public error: Boolean;
  public sending: Boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService,
    private formService: FormService,
    private alertService: AlertService,
  ) {
    this.dataService.PAGE = '/social';
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.error = false;
    this.sending = false;

    this.dataService.PAGE = '/social';
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.socials = data['socials'] as Social[];
    })
  }

  onFormSubmit(subscribeForm: NgForm) {
    this.error = false;
    this.sending = false;

    if (subscribeForm.valid) {
      this.email = subscribeForm.controls['email'].value;

      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        this.dataService.PAGE = '/subscribe/' + LanguageService.getLanguageCodeOnly() + '/' + this.email;
        this.dataService.sendGetRequest().subscribe((data: any[]) => {
          if (data['error'] == true) {
            this.alertService.showError(this.language.contactError);
          } else {
            this.alertService.showSuccess(this.language.subscribeSuccess);
            subscribeForm.resetForm();
          }
          this.sending = false;

        });

      } else {
        this.error = true;
      }
    } else {
      this.error = true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
