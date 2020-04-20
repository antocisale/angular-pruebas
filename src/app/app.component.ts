import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'blapp';
  dataToChildFromParent = "array, numeros, eventos, lo que yo quiera de padre a hijo";
  messageChildToParent = ""
}
