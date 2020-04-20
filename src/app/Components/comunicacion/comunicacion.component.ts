import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.sass']
})
export class ComunicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input () parentDataToChild;

  //opcion 2 = @Input(parentDaraToChild) mensaje ->y ese nombre "mensaje" es el que cargo en el html

  @Output() childEvent = new EventEmitter();



  onSendEvent(){
    this.childEvent.emit("enviando evento desde hijo a padre");
  }

}
