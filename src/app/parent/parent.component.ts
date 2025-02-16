import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  messageSendToChild: string = "Hello Child! From your Parent :)";
  messageGoodByeChild: string = "Good bye my child!"

  msg: string = "";
  msg2: string = "";

  receivedMessageFromChild(msg:string){
    this.msg = msg;
  }

  receiveMsg2FromChild(msg2: string){
    this.msg2 = msg2;
  }

}
