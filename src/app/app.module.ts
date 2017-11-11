import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { NewsService } from './services/news.service';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/',  pathMatch: 'full'},
  { path: '**', component: HomeComponent },
  { path: 'article', component: ArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [ NewsService ],
  bootstrap: [ AppComponent, ArticleComponent ]
})
export class AppModule { }
