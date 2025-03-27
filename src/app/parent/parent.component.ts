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

  handleUserSubmit(event: { userId: string; userName: string }) {
    console.log("User ID:", event.userId);
    console.log("User Name:", event.userName);
  }

  userId: string = "";
  userName: string = "";

  updateUser(event: { userId: string; userName: string }) {
    this.userId = event.userId;
    this.userName = event.userName;
  }

  saveData() {
    console.log("Saving User ID:", this.userId);
    console.log("Saving User Name:", this.userName);
    // You can add logic to send this data to the backend
  }

  // 24 March 2025
  email: string = 'sopheary@gmail.com';

  location: string ='';
  getLocation(location: string){
    this.location = location;
  }

  locations: string[] = [];
  getLocations(locations: string[]){
    this.locations = locations;
  }

  
  price?: Number = 100;
  

}
