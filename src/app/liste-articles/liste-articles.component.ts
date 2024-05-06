import { Article } from './../models';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.css',
})
export class ListeArticlesComponent implements OnInit {
  constructor(private ArticleService: ArticleService, private router: Router) {}
  articles: Article[] = [];
  ngOnInit(): void {
    this.refresh();
  }
  goAdd() {
    this.router.navigate(['addArticle']);
  }
  refresh() {
    this.ArticleService.getArticle().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      (error) => console.log(error)
    );
  }
  deleteArticle(article: Article) {
    this.ArticleService.deleteArticle(article).subscribe((data) => {
      this.refresh();
    });
  }
}
