import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.sass']
})
export class FormAddComponent implements OnInit {
  public errorMessage : string;
  public userId : string; 
  public tarea : string;
  
  @Input() tareas;
  @Output() modArray = new EventEmitter();

  constructor(private apiTodos: ApiserviceService) { }

  ngOnInit(): void {
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
    this.modArray.emit(this.tareas);
  }

  clearData (){
    this.userId = "0";
    this.tarea = "";
  }
}
