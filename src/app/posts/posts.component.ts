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
  dummytext: string;
  posts : any [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
 //   Retrieve posts from the API
    // this.postsService.getAllPosts().subscribe(posts => {
    //   this.posts = posts;

    // });


     let dummytext = this.postsService.getAllDummytext().subscribe((value) => { 
       this.dummytext = JSON.stringify(value);
      this.dummytext = JSON.parse((this.dummytext))._body;
      
    });



  }
}
