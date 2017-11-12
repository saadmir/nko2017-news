import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  public title = 'article';
  public article = {};

  public sourceUrl: string;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {
  }

  getReadingTime(count) {
    return moment.duration(count / 275, 'minutes').humanize();
  }

  getPublishedTime(datetime) {
    return moment(datetime).fromNow();
  }

  ngOnInit() {
	  this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.sourceUrl = params['sourceUrl'];
      this.getArticleDetail();
    });
  }

  getArticleDetail() {
    this.newsService.articleDetail(this.sourceUrl).then(
      (data) => {
        this.article = data;
      }
    );
  }
}
