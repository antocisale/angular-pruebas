import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos (){
    return [
      {id: 1, name: "gym", time: "2" },
      {id: 2, name: "cook", time: "1" },
      {id: 3, name: "sleep", time: "8" }
    ];
  }
}
