import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';

import { NewsApiResponse, SourcesApiResponse, ArticleDetailApiResponse } from '../types';

@Injectable()
export class NewsService {
  private SOURCES_URL = '/api/news/sources';
  private ARTICLES_URL = '/api/news/articles?source=bloomberg';
  private ARTICLE_STRIPPED_DETAIL_URL = '/api/news/articles/stripped_detail?url=';

  constructor(private http: HttpClient) {
    console.log('Init NewsService');
  }

  news(): Promise<any> {
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

  sources(): Promise<any> {
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

  articleDetail(sourceUrl: string): Promise<any> {
    const url = `${this.ARTICLE_STRIPPED_DETAIL_URL}${sourceUrl}`;
    return this.http.get<ArticleDetailApiResponse>(url).toPromise().then((response) => {
      try {
        return response;
      } catch (e) {
        console.error('ARTICLE DETAIL', e);
      }
    });
  }
}
