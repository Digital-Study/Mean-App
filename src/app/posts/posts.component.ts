import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  // instantiate posts to an empty array

  posts : any [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
 //   Retrieve tasks from the API
    this.postsService.getAllTasks().subscribe(posts => {
      this.posts = posts;

    });
 
  }
}
