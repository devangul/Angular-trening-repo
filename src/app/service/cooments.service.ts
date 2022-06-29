import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../interfaces/interfaces.comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  

  url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

Comments(){
return  this.http.get<Comments>(this.url);
  
}

}
