import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    
    
   }

  voteUp() {
    this.article.vote++;
  }

  voteDown() {
    this.article.vote--;
  }

  ngOnInit() {
    
  }

}
