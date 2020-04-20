import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semafoto',
  templateUrl: './semafoto.component.html',
  styleUrls: ['./semafoto.component.sass']
})
export class SemafotoComponent implements OnInit {
  public lightStatus: string = "RED";
  public contador:number  = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeLight(){
    let opciones = ["YELLOW", "GREEN" , "RED"];
    this.lightStatus = opciones[this.contador];
    this.contador == opciones.length-1 ? this.contador=0 : this.contador +=1;
    console.log(this.lightStatus,this.contador);
  }
}
