import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title: string = "sdf";

  todos: Todo[] = [];
  choice:boolean = true;
  todoObj: Todo | undefined;

  // methods
  metodeNavn(){
    console.log("tester javascript metode")
  }
  metodeNavn2():void{
    console.log("tester en TS metode");
  }

  constructor(private TodosService:TodosService) { } //bruges til services.

  // Denne metode kører hver gang der sker et eller andet. (invoke mm, initializerer.)
  ngOnInit(): void {
    // console.log(this.title)
    // this.metodeNavn();
    // this.metodeNavn2();
    // this.todos = [
    //   {id:1, title:'One', completed:false},
    //   {id:2, title:'Two', completed:true},
    //   {id:3, title:'Three', completed:false}
    // ];
    // console.log(this.todos)
    //this.todos = this.TodosService.getTodos();


    this.TodosService.getTodos().subscribe(
      dataFromAPI => {this.todos = dataFromAPI}
    );

    this.todoObj = {
      id:400,
      title:'myTitle',
      completed:false
    }

    // this.TodosService.postTodos(this.todoObj).subscribe(
    //   data => {console.log(data)}
    // )

    // onSubmitPostTodo():void{

    // }
  }
}
