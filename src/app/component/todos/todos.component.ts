import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  Todo:Itodo[];

  constructor(private _todo:TodoService) { }

  ngOnInit(): void {
    this._todo.getTodo()
        .subscribe(
          todo => this.Todo = todo
        );
  }

  changeTodoStatus(todo:Itodo){
    this._todo.changeStatus(todo);
  }

  deleteTodo(todo:Itodo){
    this._todo.deleteTodo(todo);
  }
}