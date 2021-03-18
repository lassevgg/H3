import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
// betyder at den kan benyttes til Dependency injection
@Injectable({
  providedIn: 'root'
})

export class TodosService {
  //url til api
  urlTest:string = "https://jsonplaceholder.typicode.com/todos"; //kaldes et endpoint

  constructor(private http:HttpClient) { }

  //getTodos
  // getTodos(){
  //   return [
  //     {id:1, title:'One', completed:false},
  //     {id:2, title:'Two', completed:true},
  //     {id:3, title:'Three', completed:false}
  //   ];
  // }

    getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(this.urlTest);
    }




  //postTodos
  //skal gribe data, i dette tilfælde er det todoToPostData som er argumentet der bliver parset ind.
    postTodos(todoToPostData: any):Observable<Todo>{
      return this.http.post<Todo>(this.urlTest, todoToPostData, httpOptions);
    }

  //putTodos

  //deleteTodos
}
