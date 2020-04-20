import { Component, OnInit } from '@angular/core';

import userInfo from '../../../assets/userInfo';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {
  userData = userInfo;

  constructor() { }

  ngOnInit(): void {
  }
  userSubscribed(e){
    console.log('usuario subscrito');
    console.log(e);
  }
}
