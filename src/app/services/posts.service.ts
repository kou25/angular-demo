import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
  }
  getPosts(){
    return this.http.get(this.url);

  }

  addPost(post){
    return this.http.post(this.url,JSON.stringify(post))
  }

  updatePost(post){
    return this.http.patch(this.url + '/'+post.id, JSON.stringify({isRead: true}))
  }

  deletePost(id){
    return this.http.delete(this.url + '/'+id)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
}
  
}
