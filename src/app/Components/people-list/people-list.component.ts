import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})
export class PeopleListComponent implements OnInit {
  public lista: any [] = [{nombre: "anto", edad: 31}, {nombre: "nelson", edad: 32}, {nombre:"dasha", edad: 2}];
  public newName:string = "";
  public newAge:number = 0;
  public persona: object ={nombre:"", edad:0};
  constructor() { }

  ngOnInit(): void {
  }
  
  addPerson(){
    this.persona = {nombre:this.newName, edad:this.newAge}
    this.lista.push(this.persona);
    this.newName="";
    this.newAge= 0;
  }

  setName(name){
    this.newName = name
  }

  setAge(age){
    age = parseInt(age);
    this.newAge = age
  }

}
