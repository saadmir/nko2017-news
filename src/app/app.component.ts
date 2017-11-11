import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  newsitems = [];

  constructor(private newsService: NewsService, router: Router) {
    newsService.news().then(
      (data) => {
        console.log('> > > [app.component.ts:19]', data);
        this.newsitems = data;
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}