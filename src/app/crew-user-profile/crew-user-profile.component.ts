import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-user-profile',
  templateUrl: './crew-user-profile.component.html',
  styleUrl: './crew-user-profile.component.css'
})
export class CrewUserProfileComponent implements OnInit{

  userId: string = "";

  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
    });
  }


}
