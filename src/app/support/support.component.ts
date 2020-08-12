import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private userservice:UserService) { }

  openqueForm(){
    this.userservice.shareData();
   }
   
  ngOnInit() {
  }

}
