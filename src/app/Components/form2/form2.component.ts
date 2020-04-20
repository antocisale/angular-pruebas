import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  public status: string  = "Form not submitted";

  constructor() { }

  ngOnInit(): void {
  }

  sendForm(name,mail){
    event.preventDefault();

    if (name != "" && mail != ""){
      this.status = "Form submitted"
      console.log(name,mail)
    }
    else{this.status = "error en datos"}

  }



}
