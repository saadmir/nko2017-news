import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {NewsApiResponse} from '../types';

@Injectable()
export class NewsService {
  private url = '/api/news/articles?source=bloomberg';

  constructor(private http: HttpClient) {
    console.log('Init NewsService');
  }

  news(): Promise<Array<any>> {
    return this.http.get<NewsApiResponse>(this.url).toPromise().then((response) => {
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
}
