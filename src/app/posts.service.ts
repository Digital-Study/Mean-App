import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

 // Get all tasks from the API
  getAllTasks() {
    return this.http.get('/api/tasks')
      .map(res => res.json());
  }

}