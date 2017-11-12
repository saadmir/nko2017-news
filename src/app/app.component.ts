import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import * as moment from 'moment';
import _ from 'lodash';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  public title = 'app';
  public newsitems = [];
  private NEWS_SOURCES = ['ars-technica', 'bild', 'bloomberg', 'business-insider-uk','business-insider', 'techcrunch', 'cnn', 'bbc-news', 'bbc-sport'];

  constructor(private newsService: NewsService, router: Router) {
    _.each(this.NEWS_SOURCES, (s) => {
      newsService.news(s).then(
        (data) => {         
          this.newsitems = _.shuffle(this.newsitems);
          Array.prototype.push.apply(this.newsitems, data);
        }
      );
    });
  }

  getPublishedTime(datetime){
    return moment(datetime).fromNow();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
