import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/blog.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DataService]
})
export class PostComponent implements OnInit, OnDestroy {

  private sub: any;

  private languageCode: string;

  public url: String;
  public slug: String;
  public blog: Blog;
  public imagePath: String;
  public documentPath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public mdLoad: Boolean;

  constructor(
    private dataService: DataService, 
    private metaService: MetaService, 
    private route: ActivatedRoute,
    private textService: TextService,
  ) { 
    this.languageCode = LanguageService.getLanguageCodeOnly();
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.post);
    this.metaService.setDescription(this.language.postDesc);
    this.sub = this.route.params.subscribe(params => {
      this.mdLoad = true;
      this.blog = null;
      this.url = window.location.href;

      /* Get slug */
      this.slug = params['slug'];
      this.dataService.PAGE = '/blog/' + this.languageCode + '/' + this.slug;

      this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
        this.blog = data['blog'] as Blog;
        this.imagePath = data['imagePath'];
        this.documentPath = data['documentPath'];

        /* Set title + meta */
        if (this.blog) {
          this.metaService.setTitle(this.blog.title);
          this.metaService.setKeywords(this.language.post + ', ' + this.blog.title + ', ' + this.blog.content);
          this.metaService.setDescription(this.blog.content);
        }
      })
    });

  }

  onReady() {
    this.mdLoad = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.sub.unsubscribe();
  }

}
