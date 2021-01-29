import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
  }

  saveAdd(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, this.httpOptions)
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postUrl}/${post.id}`

    return this.http.put<Post>(url, post, this.httpOptions)
  }

  removePost(post: Post | number) : Observable<Post> {
    const id = typeof post === 'number' ? post : post.id
    const url = `${this.postUrl}/${id}`

    return this.http.put<Post>(url, this.httpOptions);
  }
}
