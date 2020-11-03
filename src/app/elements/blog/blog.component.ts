import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/blog.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [DataService]
})
export class BlogComponent implements OnInit, OnDestroy {

  public blogs: Blog[];
  public imagePath: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    originTop: true
  };

  constructor(private dataService: DataService, private metaService: MetaService) {
    this.dataService.PAGE = '/blog';
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle('Blog');
    this.metaService.setDescription('Retrouvez tous les articles.');

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.blogs = data['blogs'] as Blog[];
      this.imagePath = data['imagePath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
