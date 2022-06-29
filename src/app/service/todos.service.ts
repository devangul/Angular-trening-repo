import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todos } from "../interfaces/interfaces.todos";

@Injectable({
  providedIn: "root",
})
export class TodosService {
    url = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) {}
TodosFunc(){

  return  this.http.get<Todos>(this.url)
}
   
}
