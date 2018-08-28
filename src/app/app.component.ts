import { Component } from '@angular/core';
import { Article } from '../models/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hello-word';
  articles: Article[];
  public article: Article = new Article();

  constructor() {
    this.articles = [
      new Article({title: 'google', link: 'http://google.com.vn'}),
      new Article({title: '24h', link: 'http://24h.com.vn'}),
      new Article({title: 'facebook', link: 'http://facebook.com'}),
    ];
  }

  addArticle() {
    console.log(this.article);
    this.articles.push(this.article);

    return false;
  }
}
