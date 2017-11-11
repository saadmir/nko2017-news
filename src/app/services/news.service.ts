import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ApiResponse } from '../types';

@Injectable()
export class NewsService {
  private url = '/api/v1/news';  // URL to web api

  constructor(private http: HttpClient) { }

  news(): Promise<Array<any>> {
    const fakenews = [
      {
        'author': 'Rachel Kaser',
        'title': 'Twitter games are the best use of the new 280 character limit',
        'description': 'Some genius Twitter users are already using the expanded 280 character limit on Twitter in the best way: by playing games using emoji.',
        'url': 'https://thenextweb.com/twitter/2017/11/10/twitter-games-are-the-best-use-of-the-new-280-character-limit/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/05/shutterstock_255260497-social.jpg',
        'publishedAt': '2017-11-10T22:37:55Z'
      },
      {
        'author': 'Tristan Greene',
        'title': 'The TicHome Mini smart speaker is a Google Assistant you can shower with',
        'description': 'Mobvoi’s TicHome Mini is a nifty little smart speaker that gives the Google Home Mini a run for it’s money. It’s also splash-resistant and portable.',
        'url': 'https://thenextweb.com/artificial-intelligence/2017/11/10/tichome-mini-smart-speaker-google-assistant-can-shower/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/tichomefeat-social.jpg',
        'publishedAt': '2017-11-10T23:48:25Z'
      },
      {
        'author': 'Tristan Greene',
        'title': 'Google’s AI guru predicts humans and machines will merge within 20 years',
        'description': 'One of the foremost well-known minds in artificial intelligence and futurism, Google’s Ray Kurzweil, predicst what happens next for AI.',
        'url': 'https://thenextweb.com/artificial-intelligence/2017/11/10/googles-ai-guru-predicts-humans-and-machines-will-merge-within-20-years/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/raykurzweil-social.jpg',
        'publishedAt': '2017-11-10T19:24:00Z'
      },
      {
        'author': 'TNW Deals',
        'title': 'Check out the headphones that look and sound like nothing else — at 30 percent off',
        'description': 'In an age where earbuds and headphones are so dime-a-dozen that they’re given away free on plane flights, there aren’t many models that ultimately stand out or make you do a double ...',
        'url': 'http://data.thenextweb.com/tnw/post/check_out_the_headphones_that_look_and_sound_like_nothing_else_-_at_30_off',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/8RKb6Qw-1-social.jpg',
        'publishedAt': '2017-11-10T18:00:00Z'
      },
      {
        'author': 'Matthew Hughes',
        'title': 'Today’s Singles’ Day is Black Friday’s big brother: Here’s how to make the most of it',
        'description': 'Black Friday is a ridiculous celebration of consumerism, but it can’t hold a candle to China’s Singles’ Day. Ostensibly, it’s a celebration of all things singledom, but somehow, it’s evolved to become the world’s biggest shopping event, with over $20 billion (or $24 billion, depending on who you speak to) expected to be spent by …',
        'url': 'https://thenextweb.com/asia/2017/11/10/todays-singles-day-black-fridays-big-brother-heres-make/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/06/shutterstock_191085812_China-social.jpg',
        'publishedAt': '2017-11-10T18:33:41Z'
      },
      {
        'author': 'Rachel Kaser',
        'title': 'Alibaba passes $1 billion in sales in first 3 minutes of Singles Day',
        'description': 'Alibaba is cleaning house during China’s Singles Day festival, the biggest day in online shopping all year. #Double11: Total GMV has hit US $1 billion in 2:01 minutes. pic.twitter.com/u4krOnJnfQ — Alibaba Group (@AlibabaGroup) November 10, 2017 In two minutes of sales time, Alibaba’s gross merchandise volume totaled $1 billion. By the forty-minute mark, the site’s …',
        'url': 'https://thenextweb.com/world/2017/11/10/alibaba-passes-1-billion-sales-first-3-minutes-singles-day/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/Alibaba-social.jpg',
        'publishedAt': '2017-11-10T17:42:45Z'
      },
      {
        'author': 'Vladimir Smerkis',
        'title': 'Democracy should be blockchainified',
        'description': 'Right now, we simply don’t live in a true democracy. We elect representatives to vote on our behalf, and we show our displeasure with the status quo after one or two terms with a radical switch to the opposition that sets about dismantling their work. But is there a better way? Could the people vote …',
        'url': 'https://thenextweb.com/contributors/2017/11/10/democracy-should-be-blockchainified/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/BLOCKCHAIN-1-social.png',
        'publishedAt': '2017-11-10T16:36:05Z'
      },
      {
        'author': 'George Beall',
        'title': '5 ways technology is changing consumer behaviors',
        'description': 'While it’s easy to sing the praises of technology, it is important to understand what innovation is significant and what will largely be uninfluential.',
        'url': 'https://thenextweb.com/insider/2017/11/10/5-ways-technology-is-changing-consumer-behaviors/',
        'urlToImage': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/10/chatbot_Neustar-1-social.png',
        'publishedAt': '2017-11-10T14:21:50Z'
      }
    ];

    return Promise.resolve(fakenews);
    // return this.http.get<ApiResponse>(this.url).toPromise().then((response) => {
    //   if (response.success) {
    //     return response.data;
    //   }
    //   return [];
    // });
  }
}
