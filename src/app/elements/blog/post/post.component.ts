import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/blog.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DataService]
})
export class PostComponent implements OnInit, OnDestroy {

  private sub: any;

  public url: String;
  public slug: String;
  public blog: Blog;
  public imagePath: String;
  public documentPath: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public mdLoad: Boolean;

  constructor(private dataService: DataService, private metaService: MetaService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Post');
    this.metaService.setDescription('Découvrez cet article très intéressant.');
    this.sub = this.route.params.subscribe(params => {
      this.mdLoad = true;
      this.blog = null;
      this.url = window.location.href;

      /* Get slug */
      this.slug = params['slug'];
      this.dataService.PAGE = '/blog/' + this.slug;

      this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
        this.blog = data['blog'] as Blog;
        this.imagePath = data['imagePath'];
        this.documentPath = data['documentPath'];

        /* Set title + meta */
        if (this.blog) {
          this.metaService.setTitle(this.blog.title);
          this.metaService.setKeywords('post,' + this.blog.title + ',' + this.blog.content);
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
