import { Router } from '@angular/router';
import { ArticleService } from './../service/article.service';
import { Component } from '@angular/core';
import { error } from 'node:console';
import { ProviderService } from '../service/provider.service';
import { Providers } from '../models';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  constructor(private ArticleService: ArticleService,private ProviderService:ProviderService, private router: Router) {}
providers:Providers[]=[];
  ngOnInit() {
    this.ProviderService.getProvider().subscribe((data) => {
      this.providers = data;
      console.log(this.providers);
    });
  }
  addArticle(articleform: any) {
    let id=articleform.providerId;
    let article = {
      label: articleform.label,
      price: articleform.price,
      picture: articleform.picture
    };
  //  // console.log(article);
   this.ArticleService.addArticle(id,article).subscribe(
    (data) => {
       this.router.navigate(['listeArticles']);
      },
       (error) => console.log(error)
    );
  }
}
