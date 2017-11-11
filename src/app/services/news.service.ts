import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';

import {NewsApiResponse, SourcesApiResponse, ArticleDetailApiResponse} from '../types';

@Injectable()
export class NewsService {
  private NEWS_API_BASE_URL = '/api/news/';
  private TEST_ARTICLE_URL = 'https://www.bloomberg.com/news/articles/2017-11-11/putin-urges-formal-talks-with-trump-amid-crisis-in-relations-j9v7fbk0';
  private SOURCES_URL = this.NEWS_API_BASE_URL + 'sources';
  private ARTICLES_URL = this.NEWS_API_BASE_URL + 'articles?source=';
  private ARTICLE_STRIPPED_DETAIL_URL = '/api/news/articles/stripped_detail?url=';

  constructor(private http: HttpClient) {
    console.log('Init NewsService');
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

  news(source): Promise<Array<any>> {
    source = source ? source : 'bloomberg';
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

  articleDetail(url): Promise<Array<any>> {
    url = url ? url : this.TEST_ARTICLE_URL;
    const articalDetailUrl = this.ARTICLE_STRIPPED_DETAIL_URL + url;
    return this.http.get<ArticleDetailApiResponse>(articalDetailUrl).toPromise().then((response) => {
      try {
        console.log('ARTICLE DETAIL', response);
        return response;
      } catch (e) {
        console.error('ARTICLE DETAIL', e);
      }
    });
  }

}
