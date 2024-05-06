import { Articleadd } from './../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article} from '../models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticle() {
    return this.http.get<Article[]>(environment.baseUrl + '/articles');
  }
  deleteArticle(article: Article) {
    return this.http.delete(environment.baseUrl + '/articles/' + article.id);
  }
  addArticle(id:number,articleadd:Articleadd)
  {
    return this.http.post<Articleadd>(
       environment.baseUrl + '/articles/'+id,articleadd);
  }
}
