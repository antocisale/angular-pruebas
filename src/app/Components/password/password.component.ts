import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass']
})
export class PasswordComponent implements OnInit {
  faCoffee = faCoffee;
  faTimes = faTimes;
  public displayPassword: boolean = false;
  icon= this.faTimes;

  public buttonName: string ="mostrá password";


  togglePass(){
    this.displayPassword = !this.displayPassword;

    if (this.displayPassword){
      this.buttonName ="ocultá password";
      this.icon=this.faCoffee;
    } else{
      this.buttonName ="mostrá password";
      this.icon =this.faTimes
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
