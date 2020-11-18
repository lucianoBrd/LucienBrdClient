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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [DataService]
})
export class BlogComponent implements OnInit, OnDestroy {

  private sub: any;

  private languageCode: string;

  public tag: String;
  public blogs: Blog[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    originTop: true
  };

  constructor(
    private dataService: DataService, 
    private metaService: MetaService, 
    private route: ActivatedRoute,
    private textService: TextService,
  ) {
    this.languageCode = LanguageService.getLanguageCodeOnly();
    this.dataService.PAGE = '/blog/' + this.languageCode;
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.blog);
    this.metaService.setKeywords(this.language.blog + ', ' + this.language.blogDesc);
    this.metaService.setDescription(this.language.blogDesc);
    this.sub = this.route.params.subscribe(params => {
      this.blogs = null;

      /* Get tag */
      this.tag = params['tag'];
      if (this.tag) {
        this.dataService.PAGE = '/blog/tag/' + this.languageCode + '/' + this.tag;

        /* Set title + meta */
        this.metaService.setTitle(this.language.blog + ' ' + this.tag);
        this.metaService.setKeywords(this.language.blog + ', ' + this.language.blogDesc + ', ' + this.tag);
        this.metaService.setDescription(this.language.blogTagDesc + this.tag + '.');
      } else {
        this.dataService.PAGE = '/blog/' + this.languageCode;
      }

      this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
        this.blogs = data['blogs'] as Blog[];
        this.imagePath = data['imagePath'];
      })
    });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.sub.unsubscribe();
  }

}
