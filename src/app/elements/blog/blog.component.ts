import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/blog.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { Tag } from 'src/app/shared/models/tag.interface';
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
  private results: Blog[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  search = new FormControl();
  search$: Observable<string> = this.search.valueChanges;

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
      this.results = null;

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
        this.results = data['blogs'] as Blog[];
        this.imagePath = data['imagePath'];
        
        this.sortResults();
        
        this.blogs = this.results;

        /* Search in blogs */
        this.search$
        .pipe(
          debounceTime(600),
          map(term => this.results.filter(b => 
              b.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1 || 
              b.content.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1 ||
              b.slug.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1 ||
              this.checkTags(b.tags, term)
            )
          ),
        )
        .subscribe(
          data => {this.blogs = data; this.sortBlogs();}
        );
      })
    });

  }

  private checkTags(tags: Tag[], term) {
    var result = false;
    tags.forEach(tag => {
      result = result || tag.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
    });
    return result;
  }

  private sortBlogs() {
    this.blogs.sort(
      function(a,b){
        return b.date.getDate() - a.date.getDate();
      }
    );
  }

  private sortResults() {
    this.results.sort(
      function(a,b){
        return b.date.getDate() - a.date.getDate();
      }
    );
  }

  trackById(blog: Blog) {
    return blog.id;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.sub.unsubscribe();
  }

}
