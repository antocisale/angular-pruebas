import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  @Output() subscribed = new EventEmitter<boolean>();

  @Input () nombre;
  @Input () user;
  @Input () foto;

  constructor() { }

  ngOnInit(): void {
    this.name = this.nombre;
    this.username= this.user;
    this.avatar = this.foto;
  }
  changing(valor){
    this.username = valor;
  }

  makeSubscription(){
    this.subscribed.emit(true)
  }
}
