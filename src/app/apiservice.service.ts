import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITodos } from './toDos';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public toDos;
  public numberToDos= "hola";
  public errorMessage="";

  url: string ="https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }
  
  getTodos(): Observable<ITodos[]>{
    return  this.http.get<ITodos[]>(this.url)
                      .pipe(
                          catchError(this.errorHandler)
                        )
  }

  addTodo(tarea): Observable<ITodos>{
    return this.http.post<ITodos>(this.url,tarea)
                    .pipe(
                      catchError(this.errorHandler)
                    )

  }

  // getTodos() {
  //   this.http.get(this.url).subscribe(data=>{this.toDos = data})
  // }
  // buildObservable () : Observable<any>{
  //   return Observable.create(function(observer){
  //     setInterval(()=>observer.next("Hola"),1000)
  //   })
  // }

  errorHandler (error: HttpErrorResponse){
    return observableThrowError(error.message)

  }

  deleteToDo(id): Observable<{}>{
    return this.http.delete(`${this.url}/${id}`)
                    .pipe(
                      catchError(this.errorHandler)
                    )
  }

  updateToDo(id, data): Observable <ITodos>{
    return this.http.put<ITodos>(`${this.url}/${id}`,data)
                    .pipe(
                      catchError(this.errorHandler)
                    )
  }

}


