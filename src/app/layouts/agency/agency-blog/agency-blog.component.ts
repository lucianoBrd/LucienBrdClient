import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/blog.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-agency-blog',
  templateUrl: './agency-blog.component.html',
  styleUrls: ['./agency-blog.component.scss'],
  providers: [DataService]
})
export class AgencyBlogComponent implements OnInit, OnDestroy {

  public blogs: Blog[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private textService: TextService) {
    this.dataService.PAGE = '/blog/latest';
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.blogs = data['blogs'] as Blog[];

      /* Case there are not 3 items */
      length = this.blogs.length;
      if(this.blogs != null && length < 3 && length > 0) {
        for (let i = 0; i < (3 - length); i++) {
          this.blogs.push(this.blogs[0]);
        }
      }
      this.imagePath = data['imagePath'];
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  blogCarouselOptions = {
    items: 3,
    margin: 30,
    nav: false,
    dots: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      576: {
        items: 2,
        margin: 10
      },
      991: {
        items: 3
      },
      1600: {
        items: 3
      }
    }
  }

}
