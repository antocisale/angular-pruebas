import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from '../../apiservice.service';
import { compilePipeFromMetadata } from '@angular/compiler';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.scss']
})
export class ApiTableComponent implements OnInit {
  public tareas : any[] = [];
  public errorMessage : string;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;
  public userId : string; 
  public tarea : string;
  public id : number;
  public estado : any;
  public opciones : string;

  
  constructor(private apiTodos: ApiserviceService) { }

  ngOnInit(): void {
    this.apiTodos.getTodos().subscribe(data=>this.tareas=data,
                                      error =>this.errorMessage =error)
    this.userId = "0";
    this.tarea = "";
    this.opciones="";
    

    // const observable = this.apiTodos.buildObservable();
    // observable.subscribe(data=>data = this.tareas)
  }

  activateModal(opcion){
    this.opciones = opcion;
  }

  editToDo(id){
    let modTarea = this.tareas.find(tarea =>{
      return tarea.id == id;
    });
    this.id= id;
    this.userId= modTarea.userId;
    this.tarea = modTarea.title;
    this.estado = modTarea.completed;
  }

  edit(id){
    this.editToDo(id);
    this.activateModal("EDITAR");
  }

  deleteToDo(id):void{
    this.apiTodos.deleteToDo(id).subscribe();
    let index = this.tareas.findIndex(tarea =>{
      return tarea.id == id;
    })
    this.tareas.splice(index,1);
  }


  addTarea(tarea, usuario){
    const newTarea = {
      userId: parseInt(usuario),
      title: tarea,
      completed:false
    };
    this.apiTodos.addTodo(newTarea).subscribe(data => this.tareas.push(newTarea),
                                              error =>this.errorMessage =error)
    this.clearData();
    this.opciones = "";
  }

  clearData (){
    this.userId = "0";
    this.tarea = "";
  }


  modifyToDo(id,tarea,userId,status): void{
    const edittedTarea = {
      id: id,
      userId: parseInt(userId),
      title: tarea,
      completed:JSON.parse(status)
    };
    this.apiTodos.updateToDo(id,edittedTarea).subscribe(todo =>{
              let index = this.tareas.findIndex(tarea =>{
                return tarea.id == id;
              })
              this.tareas[index] = todo;
            }, 
      error =>this.errorMessage =error);
      this.clearData();
      this.opciones="";
  };

}

// ngOnInit(): void {
//   this.apiTodos.getTodos().subscribe(data=>this.tareas=data,
//                                     error =>this.errorMessage =error)
// }