import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';

import { NewsApiResponse, SourcesApiResponse, ArticleDetailApiResponse } from '../types';

@Injectable()
export class NewsService {
  private NEWS_API_BASE_URL = '/api/news/';
  private SOURCES_URL = this.NEWS_API_BASE_URL + 'sources';
  private ARTICLES_URL = this.NEWS_API_BASE_URL + 'articles?source=';
  private ARTICLE_STRIPPED_DETAIL_URL = this.NEWS_API_BASE_URL + 'articles/stripped_detail?url=';

  constructor(private http: HttpClient) {
    console.log('Init NewsService');
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

  news(source: string = 'bloomberg'): Promise<any> {
    const url = this.ARTICLES_URL + source;
    return this.http.get<NewsApiResponse>(url).toPromise().then((response) => {
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
