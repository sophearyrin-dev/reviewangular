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

  //user information
  @Input() userId: string = "";
  @Input() userName: string = "";
  @Output() submitEvent = new EventEmitter<{ userId: string; userName: string }>();

  @Output() userChange = new EventEmitter<{ userId: string; userName: string }>();

  onSendMessageToParent(){
    this.messageEvent.emit("Hello Parents, I hope you are doing good");
  }

  onSeekingMoney($event: any){
    this.messageEvent2.emit($event);
    console.log($event);
    
  }

  submitForm() {
    this.submitEvent.emit({ userId: this.userId, userName: this.userName });
  }

  onInputChange() {
    this.userChange.emit({ userId: this.userId, userName: this.userName });
  }



}
