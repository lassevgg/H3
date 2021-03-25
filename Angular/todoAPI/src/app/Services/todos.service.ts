import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http'

//lav dynamisk
var t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJyb2xlIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiJWMy4xIiwibmJmIjoxNjE2NTcyMjA1LCJleHAiOjE2MTY3NDUwMDUsImlhdCI6MTYxNjU3MjIwNX0.c_0TzrJgZspUEiGBvyF4g5bJ31zKGPZjPXLjVK3VM1w';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + t
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
