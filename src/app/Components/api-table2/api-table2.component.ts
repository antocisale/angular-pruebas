import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

import { ApiserviceService } from '../../apiservice.service';
import { compilePipeFromMetadata } from '@angular/compiler';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-api-table2',
  templateUrl: './api-table2.component.html',
  styleUrls: ['./api-table2.component.sass']
})
export class ApiTable2Component implements OnInit {
  public tareas = [];
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

  ngOnChanges(cambios: SimpleChange){
    this.cerrarModal(cambios);
  }

  cerrarModal(cambios){
    this.activateModal("none");
    this.tareas = cambios.currentValue;
  }

  activateModal(opcion){
    this.opciones = opcion;
    console.log(this.opciones)
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

  clearData (){
    this.userId = "0";
    this.tarea = "";
  }
}