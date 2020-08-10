import { Injectable } from '@angular/core';
import { Post } from './post'
import { POST } from './mock-post'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts():Observable<Post[]>{
    return of (POST);
  } 

  constructor() { }
}
