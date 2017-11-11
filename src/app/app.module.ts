import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NewsService } from './services/news.service';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'article', component: ArticleComponent, pathMatch: 'full'},
  { path: '**', component: AppComponent, pathMatch: 'full'},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ NewsService ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
