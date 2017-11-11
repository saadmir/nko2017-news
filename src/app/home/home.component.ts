import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges {

  constructor(private newsService: NewsService, router: Router) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}