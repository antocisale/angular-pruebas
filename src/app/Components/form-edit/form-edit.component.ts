import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.sass']
})
export class FormEditComponent implements OnInit {
  public errorMessage : string;
  
  @Input() tareas;
  @Input() userId;
  @Input() tarea;
  @Input() id;
  @Input("estado") status;

  @Output() modArray = new EventEmitter;

  constructor(private apiTodos: ApiserviceService) { }

  ngOnInit(): void {
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
      this.modArray.emit(this.tareas);
  };
  
  clearData (){
    this.userId = "0";
    this.tarea = "";
  }

}
