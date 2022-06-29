import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/interfaces.user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

TestUser(){
return  this.http.get<User>(this.url);
  
}

}
