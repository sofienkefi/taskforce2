import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../models';

@Component({
  selector: 'app-liste-post',
  templateUrl: './liste-post.component.html',
  styleUrl: './liste-post.component.css'
})
export class ListePostComponent implements OnInit {
  
  constructor(private PostService:PostService){}
  posts : Post[]=[];
  ngOnInit():void {
    this.PostService.getPosts().subscribe(
      (data:Post[])=>
        {
          console.log(data);
          this.posts=data;
        },
        error => console.log(error)
    );
  }

}
