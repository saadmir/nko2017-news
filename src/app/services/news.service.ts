import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';

import {NewsApiResponse, SourcesApiResponse} from '../types';

@Injectable()
export class NewsService {
  private TEST_ARTICLE_URL = 'https://www.bloomberg.com/news/articles/2017-11-11/putin-urges-formal-talks-with-trump-amid-crisis-in-relations-j9v7fbk0';
  private SOURCES_URL = '/api/news/sources';
  private ARTICLES_URL = '/api/news/articles?source=bloomberg';
  private ARTICLE_STRIPPED_DETAIL_URL = '/api/news/articles/stripped_detail?url=' + this.TEST_ARTICLE_URL;

  constructor(private http: HttpClient) {
    console.log('Init NewsService');
  }

  news(): Promise<Array<any>> {
    return this.http.get<NewsApiResponse>(this.ARTICLES_URL).toPromise().then((response) => {
      try {
        console.log('NEWS', response);
        if (response.status && response.status === 'ok') {
          return response.articles;
        }
        return [];
      } catch (e) {
        console.error('NEWS', e);
      }
    });
  }

  sources(): Promise<Array<any>> {
    return this.http.get<SourcesApiResponse>(this.SOURCES_URL).toPromise().then((response) => {
      try {
        console.log('SOURCES', response);
        if (response.status && response.status === 'ok') {
          return response.sources;
        }
        return [];
      } catch (e) {
        console.error('SOURCES', e);
      }
    });
  }

  articleDetail(): Promise<Array<any>> {
    return this.http.get<any>(this.ARTICLE_STRIPPED_DETAIL_URL).toPromise().then((response) => {
      try {
        console.log('ARTICLE DETAIL', response);
        return response;
      } catch (e) {
        console.error('ARTICLE DETAIL', e);
      }
    });
  }

}
