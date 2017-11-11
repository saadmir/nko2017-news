import {Component, OnInit, OnChanges} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import * as moment from 'moment';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit, OnChanges {
  title = 'article';
  article = {};

  constructor(private newsService: NewsService, router: Router) {
    newsService.articleDetail().then(
      (data) => {
        console.log('ARTICLE DETAIL', data);
        this.article = data;
      }
    );

  }

  getReadingTime(count) {
    return moment.duration(count / 275, 'minutes').humanize();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
