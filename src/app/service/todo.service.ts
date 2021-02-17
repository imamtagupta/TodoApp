import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Itodo } from "../model/todo";


@Injectable({
  providedIn : 'root'
})
export class TodoService{

  public todo : Itodo[];
  constructor() {
  this.todo=[
    {
      id:"111",
      name:"Learn java",
      isCompleted:false,
      date: new Date()
    },
    {
      id:"222",
      name:"Learn c++",
      isCompleted:false,
      date: new Date()
    },
    {
      id:"333",
      name:"Learn javascript",
      isCompleted:false,
      date: new Date()
    }
    ];
  }

  getTodo(){
     return of(this.todo);
   }

  addTodo(todos:Itodo){
    this.todo.push(todos);
  }

  changeStatus(todos:Itodo){
    this.todo.map( singleTodo => {
       if(todos.id == singleTodo.id){
         todos.isCompleted = !todos.isCompleted;
       }
    });
  }

  deleteTodo(todos:Itodo){
    const currentIdx = this.todo.findIndex(obj => obj.id == todos.id);

    this.todo.splice(currentIdx, 1);
  }



}