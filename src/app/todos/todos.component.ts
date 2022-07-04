import { Component, OnInit } from '@angular/core';
import { Todos } from '../interfaces/interfaces.todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

Response: Todos | any;
str: any;
  constructor(private todosService: TodosService) {
this.todosService.TodosFunc().subscribe(res=>{
  this.Response = res;
})

   }

  ngOnInit(): void {
  }

}
