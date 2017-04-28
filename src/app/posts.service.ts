import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }


 // Get Sample text from API
  getAllDummytext() {
    return this.http.get('/api/dummy');
     // .map(res => res.json());
  }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }


}