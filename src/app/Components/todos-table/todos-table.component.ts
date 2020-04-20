import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.sass']
})
export class TodosTableComponent implements OnInit {
  tareass: any[] = [];
  

  constructor(private servicioTodos: TodosService) { }

  ngOnInit(): void {
    this.tareass = this.servicioTodos.getTodos();
  }

}
