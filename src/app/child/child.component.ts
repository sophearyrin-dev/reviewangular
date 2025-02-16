import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message : string = "";
  @Input() message2 : string = "";
  @Output() messageEvent = new EventEmitter<string>();
  @Output() messageEvent2 = new EventEmitter<string>();

  onSendMessageToParent(){
    this.messageEvent.emit("Hello Parents, I hope you are doing good");
  }

  onSeekingMoney(){
    this.messageEvent2.emit("Papa, Can I have some money?");
  }

  

}
