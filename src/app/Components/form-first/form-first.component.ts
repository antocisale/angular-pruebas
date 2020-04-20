import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.scss']
})
export class FormFirstComponent implements OnInit {
  public status : string = "Form not submitted";
  public labelNameClass: string = "default";
  public labelMailClass:string  = "default";
  public defaultName:string = "";
  public defaultMail:string = "";

  constructor() { }

  ngOnInit(): void { }

  sendForm(name){
    event.preventDefault();

    if (this.labelNameClass == "completed" && this.defaultMail != ""){
      this.status = "Form submitted";
    }
    else{this.status = "error en datos";}

    console.log(name);
  }

  resetForm(){
    event.preventDefault();
    this.defaultName="";
    this.defaultMail = "";
    this.status = "formulario no enviado";
    this.labelNameClass = "default";
    this.labelMailClass = "default";
  }

  setName(name){
    this.defaultName = name;
    if (this.defaultName.length >2) {
      this.labelNameClass = "completed";
    }
    else{this.labelNameClass = "error";}
  }

  setMail(mail){
    this.defaultMail = mail;
    this.labelMailClass = "completed";
  }


}
