import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoFromTodos: Todo = new Todo;
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todoToDelete:Todo):void{
    console.log("Delete" + todoToDelete.id);

  }

toggle(todoFromCheckbox:Todo):void{
  console.log("does it work?? Invoke toggle...");
  // vi skal have ændret property completed.
  todoFromCheckbox.completed = !todoFromCheckbox.completed;
}

//dynamisk styling - elements
  setClasses(){
  let tempClasses = {
    todo:true,
    'is-completed':this.todoFromTodos.completed
  }
  return tempClasses;
}


}
