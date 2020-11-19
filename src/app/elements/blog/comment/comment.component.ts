import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Comment } from 'src/app/shared/models/comment.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { FormService } from 'src/app/shared/service/form.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [DataService]
})
export class CommentComponent implements OnInit, OnDestroy {

  private sub: any;

  public slug: String;
  public comments: Comment[];
  public imagePath: String;
  public language: Language;

  public replyComment: Comment;

  private name: String;
  private email: String;
  private message: String;
  private captcha: String;

  public error: Boolean;
  public errorMail: Boolean;
  public sending: Boolean;
  public hasSent: Boolean;
  public hasSentError: Boolean;

  public siteKey: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private textService: TextService,
    private formService: FormService,
    private modalService: NgbModal
  ) { 
    this.language = this.textService.getTextByLocal();
    this.siteKey = this.formService.getSiteKey();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.hasSent = false;

      /* Get slug */
      this.slug = params['slug'];

      this.getComments();
    });

  }

  private getComments() {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSentError = false;

    this.comments = null;

    this.dataService.PAGE = '/comment/' + this.slug;
    this.dataService.PARAMS = null;

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.comments = data['comments'] as Comment[];
      this.imagePath = data['imagePath'];
    })
  }

  onFormSubmit(commentForm: NgForm) {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;

    if (commentForm.valid && this.captcha) {
      this.name = commentForm.controls['name'].value;
      this.email = commentForm.controls['email'].value;
      this.message = commentForm.controls['message'].value;

      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;

        /* Sent to api */
        this.dataService.PARAMS = {
          captcha: this.captcha, 
          name: this.name, 
          mail: this.email, 
          message: this.message,
          post: this.slug
        };
        this.dataService.PAGE = '/comment';
        this.dataService.sendGetRequest().subscribe((data: any[]) => {
          if (data['error'] == true) {
            this.hasSentError = true;
          } else {
            this.hasSent = true;
            commentForm.resetForm();
            /* Refresh comments */
            this.getComments();
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
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.sub.unsubscribe();
  }

  openVerticallyCentered(content, id: number) {
    this.replyComment = this.comments.find(x => x.id === id);;

    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
